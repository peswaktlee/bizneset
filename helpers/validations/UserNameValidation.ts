import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { z } from 'zod'
import { Translation } from '@/helpers/generals'

export const UserNameValidation = (name: string | null): ValidationFunctionObjectReturnTypes => {
    const minLengthCase = z.string().min(2).safeParse(name)

    if (!minLengthCase.success) return {
        message: Translation('name-min-error'),
        error: true
    }

    const maxLengthCase = z.string().max(64).safeParse(name)

    if (!maxLengthCase.success) return {
        message: Translation('name-max-error'),
        error: true
    }

    const stringCase = z.string().safeParse(name)

    if (!stringCase.success) return {
        message: Translation('name-string-error'),
        error: true
    }

    return {
        message: '',
        error: false
    }
}

export default UserNameValidation