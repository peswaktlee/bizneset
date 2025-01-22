import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { CreateValidationObject, Translation } from '@/helpers/generals'
import { CitiesState } from '@/data/states'

export const CityValidation = (city: string | null): ValidationFunctionObjectReturnTypes => {
    const { Cities } = CitiesState.getState()

    const validation = CreateValidationObject()
    const citiesIds = Cities?.map(city => city?._id)

    if (!city) {
        validation.message = Translation('city-post-selection-error'),
        validation.error = true
    }

    else if (!citiesIds.includes(city)) {
        validation.message = Translation('city-post-selection-error')
        validation.error = true
    }

    return validation
}

export default CityValidation