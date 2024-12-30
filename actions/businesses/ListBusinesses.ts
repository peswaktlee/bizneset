import { BusinessesState } from '@/data/states'
import { Request } from '@/helpers/http'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListBusinesses = async (AbortControllerReference: { current: AbortController | null }) => {
    const { Businesses, SetBusinessesState } = BusinessesState.getState()

    try {
        if (AbortControllerReference.current) AbortControllerReference.current.abort()
        AbortControllerReference.current = new AbortController()

        SetBusinessesState({ Loading: true })

        let length = Businesses.length

        const { success, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.BUSINESSES.LIST,
            signal: AbortControllerReference.current.signal,
            body: { offset: length }
        })

        const count = data?.count
        const businesses = data?.businesses

        if (!AbortControllerReference.current.signal.aborted) {
            if (success) SetBusinessesState({
                Businesses: [...Businesses, ...businesses],
                Loading: false,
                Error: false,
                HasMore: (length + businesses.length) < count
            })
        
            else SetBusinessesState({
                Businesses: [],
                Error: true,
                HasMore: false
            })
        }
    }

    catch (error: unknown) {
        // @ts-ignore
        if (error?.message?.includes('aborted')) return

        else SetBusinessesState({ 
            Businesses: [],
            Loading: true,
            Error: false,
            HasMore: true
        })
    }
}

export default ListBusinesses