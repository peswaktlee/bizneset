import type { BusinessInterface } from '@/ts'

import { BusinessesState } from '@/data/states'
import { Request } from '@/helpers/http'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListBusinesses = async (AbortControllerReference: { current: AbortController | null }) => {
    const { 
        Businesses, 
        Filters, 
        SetBusinessesState 
    } = BusinessesState.getState()

    try {
        if (AbortControllerReference.current) AbortControllerReference.current.abort()
        AbortControllerReference.current = new AbortController()

        SetBusinessesState({ Loading: true })

        let length = Businesses.length

        const { success, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.BUSINESSES.LIST,
            signal: AbortControllerReference.current.signal,
            body: { 
                offset: length,
                country: Filters?.Country || null,
                category: Filters?.Category || null,
                city: Filters?.City || null,
                term: Filters?.Term || null
            }
        })

        const dataFormatted = data as { 
            count: number, 
            businesses: Array<BusinessInterface>
        }

        const count = dataFormatted?.count
        const businesses = dataFormatted?.businesses

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