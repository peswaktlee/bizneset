import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { CreateValidationObject, Translation } from '@/helpers/generals'
import { CountriesState } from '@/data/states'

export const CountryValidation = (country: string): ValidationFunctionObjectReturnTypes => {
    const { Countries } = CountriesState.getState()

    const validation = CreateValidationObject()
    const countriesIds = Countries?.map(country => country?._id)
    
    if (!country) {
        validation.message = Translation('country-post-selection-error'),
        validation.error = true
    }

    else if (!countriesIds.includes(country)) {
        validation.message = Translation('country-post-selection-error'),
        validation.error = true
    }

    return validation
}

export default CountryValidation