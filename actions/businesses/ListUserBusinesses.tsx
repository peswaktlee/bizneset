import type { BusinessInterface } from '@/ts'

import { UserBusinessesState } from '@/data/states'
import { Request } from '@/helpers/http'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListUserBusinesses = async (AbortControllerReference: { current: AbortController | null }) => {
    const { UserBusinesses, SetUserBusinessesState } = UserBusinessesState.getState()

    try {
        if (AbortControllerReference.current) AbortControllerReference.current.abort()
        AbortControllerReference.current = new AbortController()

        SetUserBusinessesState({ Loading: true })

        let length = UserBusinesses.length

        const { success, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.BUSINESSES.LIST,
            signal: AbortControllerReference.current.signal,
            body: { offset: length }
        })

        const dataFormatted = data as { 
            count: number, 
            businesses: Array<BusinessInterface>
        }

        const count = dataFormatted?.count
        const businesses = dataFormatted?.businesses

        if (!AbortControllerReference.current.signal.aborted) {
            if (success) SetUserBusinessesState({
                UserBusinesses: [...UserBusinesses, ...businesses],
                Loading: false,
                Error: false,
                HasMore: (length + businesses.length) < count
            })
        
            else SetUserBusinessesState({
                UserBusinesses: [],
                Error: true,
                HasMore: false
            })
        }
    }

    catch (error: unknown) {
        // @ts-ignore
        if (error?.message?.includes('aborted')) return

        else SetUserBusinessesState({ 
            UserBusinesses: [],
            Loading: true,
            Error: false,
            HasMore: true
        })
    }
}

export default ListUserBusinesses