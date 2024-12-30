import type { LoadingReference } from '@/ts'

import { BusinessState, SimilarBusinessesState } from '@/data/states'
import { Request } from '@/helpers/http'
import { Console } from '@/helpers/debug'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListSimilarBusinesses = async (Loading: LoadingReference) => {
    const { Business } = BusinessState.getState()
    const { SetSimilarBusinessesState } = SimilarBusinessesState.getState()

    try {
        SetSimilarBusinessesState({ Loading: true })

        const { success, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.BUSINESSES.LIST,
            body: { 
                slug: Business?.Slug
            }
        })

        if (success) SetSimilarBusinessesState({
            Businesses: data,
            Loading: false,
            Error: false
        })
        
        else SetSimilarBusinessesState({
            Businesses: [],
            Error: true
        })
    }

    catch (error: unknown) {
        Console.Error('ListSimilarBusinesses', error)

        SetSimilarBusinessesState({ 
            Businesses: [],
            Loading: true,
            Error: false
        })
    }
}

export default ListSimilarBusinesses