import type { CityInterface, LoadingReference } from '@/ts'

import { Request } from '@/helpers/http'
import { CitiesState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { METHODS, ENDPOINTS } from '@/data/constants'

const ListCities = async (Loading: LoadingReference) => {
    const { SetCitiesState, Cities } = CitiesState.getState()

    try {
        if (Cities.length === 0 && !Loading.current) {
            Loading.current = true

            const { data, success } = await Request({
                method: METHODS.POST,
                path: ENDPOINTS.CITIES.LIST
            })

            if (success) SetCitiesState({
                Cities: data as Array<CityInterface>,
                Loading: false,
                Error: false
            })

            else SetCitiesState({
                Cities: [],
                Loading: false,
                Error: true
            })

            Loading.current = false
        }
    }

    catch (error) {
        Console.Error('ListCities', error)
        
        SetCitiesState({
            Cities: [],
            Loading: false,
            Error: true
        })
    }
}

export default ListCities