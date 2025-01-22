import type { ValidationFunctionObjectReturnTypes } from '@/ts'

import { string } from 'zod'
import { CreateValidationObject, Translation } from '@/helpers/generals'

export const WebsiteValidation = (link: string): ValidationFunctionObjectReturnTypes => {
    const validation = CreateValidationObject()
    const websiteSchemaRule = string().url()

    try {
        websiteSchemaRule.parse(link)
    }

    catch (error) {
        validation.message = Translation('link-validation-error')
        validation.error = true
    }

    return validation
}

export default WebsiteValidation