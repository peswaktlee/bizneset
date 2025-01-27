import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { z } from 'zod'
import { Translation } from '@/helpers/generals'

export const UserSurnameValidation = (surname: string | null): ValidationFunctionObjectReturnTypes => {
    const minLengthCase = z.string().min(2).safeParse(surname)

    if (!minLengthCase.success) return {
        message: Translation('surname-min-error'),
        error: true
    }

    const maxLengthCase = z.string().max(64).safeParse(surname)

    if (!maxLengthCase.success) return {
        message: Translation('surname-max-error'),
        error: true
    }

    const stringCase = z.string().safeParse(surname)

    if (!stringCase.success) return {
        message: Translation('surname-string-error'),
        error: true
    }

    return {
        message: '',
        error: false
    }
}

export default UserSurnameValidation