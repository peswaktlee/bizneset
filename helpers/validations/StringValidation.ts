import type { StringValidationProps, ValidationFunctionObjectReturnTypes } from '@/ts'

import { string } from 'zod'
import { CreateValidationObject, Translation } from '@/helpers/generals'

const StringValidation = (props: StringValidationProps): ValidationFunctionObjectReturnTypes => {
    const {
        value,
        min,
        max,
        noNumbers,
        noSpecialCharacters,
        entityTranslation
    } = props

    const validation = CreateValidationObject()

    const isStringRule = string()
    const minCaseSchemaRule = string().min(2)
    const maxCaseSchemaRule = string().max(99)
    const noNunbersRule = string().regex(/^[a-zA-Z\s]*$/)
    const noSpecialCharactersRule = string().regex(/^[a-zA-Z\s]*$/)

    try {
        isStringRule.parse(value)
    }

    catch (error) {
        validation.message = `${Translation(entityTranslation)} ${Translation('needs-to-be-a-string')}!`
        validation.error = true
    }

    if (min) {
        try {
            minCaseSchemaRule.parse(value)
        }

        catch (error) {
            validation.message = `${Translation(entityTranslation)} ${Translation('needs-to-be-at-least')} ${min} ${Translation('characters')}!`
            validation.error = true
        }
    }

    if (max) {
        try {
            maxCaseSchemaRule.parse(value)
        }

        catch (error) {
            validation.message = `${Translation(entityTranslation)} ${Translation('can-not-have-more-than')} ${max} ${Translation('characters')}!`
            validation.error = true
        }
    }

    if (noNumbers) {
        try {
            noNunbersRule.parse(value)
        }

        catch (error) {
            validation.message = `${Translation(entityTranslation)} ${Translation('can-not-have-numbers')}!`
            validation.error = true
        }
    }

    
    if (noSpecialCharacters) {
        try {
            noSpecialCharactersRule.parse(value)
        }

        catch (error) {
            validation.message = `${Translation(entityTranslation)} ${Translation('can-not-have-special-characters')}!`
            validation.error = true
        }
    }

    return validation
}

export default StringValidation