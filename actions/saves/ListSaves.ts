import type { BusinessInterface } from '@/ts'

import { UserSavesState } from '@/data/states'
import { Request } from '@/helpers/http'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListSaves = async (AbortControllerReference: { current: AbortController | null }) => {
    const { UserSaves, SetUserSavesState } = UserSavesState.getState()

    try {
        if (AbortControllerReference.current) AbortControllerReference.current.abort()
        AbortControllerReference.current = new AbortController()

        SetUserSavesState({ Loading: true })

        let length = UserSaves.length

        const { success, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.SAVES.LIST,
            signal: AbortControllerReference.current.signal,
            body: { offset: length }
        })

        const dataFormatted = data as { 
            count: number, 
            saves: Array<BusinessInterface>
        }

        const count = dataFormatted?.count
        const saves = dataFormatted?.saves

        if (!AbortControllerReference.current.signal.aborted) {
            if (success) SetUserSavesState({
                UserSaves: [...UserSaves, ...saves],
                Loading: false,
                Error: false,
                HasMore: (length + saves.length) < count
            })
        
            else SetUserSavesState({
                UserSaves: [],
                Error: true,
                HasMore: false
            })
        }
    }

    catch (error: unknown) {
        // @ts-ignore
        if (error?.message?.includes('aborted')) return

        else SetUserSavesState({ 
            UserSaves: [],
            Loading: true,
            Error: false,
            HasMore: true
        })
    }
}

export default ListSaves