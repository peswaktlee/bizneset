import type { CountryInterface, LoadingReference } from '@/ts'

import { Request } from '@/helpers/http'
import { CountriesState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { METHODS, ENDPOINTS } from '@/data/constants'

const ListCountries = async (Loading: LoadingReference) => {
    const { SetCountriesState, Countries } = CountriesState.getState()

    try {
        if (Countries.length === 0 && !Loading.current) {
            Loading.current = true

            const { data, success } = await Request({
                method: METHODS.POST,
                path: ENDPOINTS.COUNTRIES.LIST
            })

            if (success) SetCountriesState({
                Countries: data as Array<CountryInterface>,
                Loading: false,
                Error: false
            })

            else SetCountriesState({
                Countries: [],
                Loading: false,
                Error: true
            })

            Loading.current = false
        }
    }

    catch (error) {
        Console.Error('ListCountries', error)
        
        SetCountriesState({
            Countries: [],
            Loading: false,
            Error: true
        })
    }
}

export default ListCountries