import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { z } from 'zod'
import { Translation } from '@/helpers/generals'

export const NotificationBooleanValidation = (value: boolean): ValidationFunctionObjectReturnTypes => {
    const isBool = z.boolean().safeParse(value)

    if (!isBool.success) return {
        message: Translation('boolean-error-validation'),
        error: true
    }

    return {
        message: '',
        error: false
    }
}

export default NotificationBooleanValidation