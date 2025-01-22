import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { string } from 'zod'
import { CreateValidationObject, Translation } from '@/helpers/generals'

export const EmailValidation = (email: string): ValidationFunctionObjectReturnTypes => {
    const validation = CreateValidationObject()
    const emailSchemaRule = string().email()

    try {
        emailSchemaRule.parse(email)
    }

    catch (error) {
        validation.message = Translation('email-validation-error')
        validation.error = true
    }

    return validation
}

export default EmailValidation