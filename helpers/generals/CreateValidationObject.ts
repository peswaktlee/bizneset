import type { ValidationFunctionObjectReturnTypes } from '@/ts'

const CreateValidationObject = (): ValidationFunctionObjectReturnTypes => {
    return {
        error: false,
        message: ''
    }
}

export default CreateValidationObject