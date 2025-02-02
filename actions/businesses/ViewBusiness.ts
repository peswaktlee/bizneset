import type { BusinessInterface, LoadingReference } from '@/ts'

import { BusinessState } from '@/data/states'
import { Request } from '@/helpers/http'
import { Console } from '@/helpers/debug'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ViewBusiness = async (
    category: string,
    slug: string,
    Loading: LoadingReference, 
) => {
    const { SetBusinessState } = BusinessState.getState()

    try {
        Loading.current = true

        const { success, code, data } = await Request({ 
            method: METHODS.POST,
            path: ENDPOINTS.BUSINESSES.VIEW,
            body: {
                category: category,
                slug: slug,
                population: {
                    Name: 1,
                    WebflowPageId: 1,
                    WebflowSiteId: 1
                }
            }
        })

        if (success) {
            SetBusinessState({
                Business: data as BusinessInterface,
                Loading: false,
                Error: false,
                NotFound: false
            })

            Loading.current = false
        }

        else {
            if (code === 404) SetBusinessState({
                NotFound: true,
                Loading: false
            })

            else SetBusinessState({
                Error: true,
                Loading: false
            })

            Loading.current = false
        }
    }

    catch (error) {
        Console.Error('ViewBusiness', error)

        SetBusinessState({
            Error: true,
            Loading: false
        })

        Loading.current = false
    }
}

export default ViewBusiness