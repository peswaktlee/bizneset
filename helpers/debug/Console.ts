import { RequestDebug } from '~/helpers/http'
import { AuthState } from '~/apps/www/states'
import { ENDPOINTS, LOG_TYPES, METHODS, USER_ROLES } from '~/constants'

const URL = ENDPOINTS.DEBUG.LOG

const OnDebugConsole = async (func: string, message: unknown) => {
    try {
        const { User } = AuthState.getState()
        if (User && User?.Role === USER_ROLES.ADMIN) console.debug(func, message)
    }

    catch (error) {
        console.error('OnDebugConsole', error)
    }
}

const OnInfoConsole = async (func: string, message: unknown) => {
    try {
        const { User } = AuthState.getState()
        if (User && User?.Role === USER_ROLES.ADMIN) console.info(message)

        let stringified = typeof message !== 'string' ? JSON.stringify(message, Object.getOwnPropertyNames(message)) : message.toString()

        await RequestDebug({ 
            method: METHODS.POST,
            path: URL,
            body: {
                message: stringified,
                func,
                path: window.location.pathname || null,
                type: LOG_TYPES.INFO
            }
        })
    }

    catch (error) {
        console.error('OnInfoConsole', error)
    }
}

const OnWarningConsole = async (func: string, message: unknown) => {
    try {
        const { User } = AuthState.getState()
        if (User && User?.Role === USER_ROLES.ADMIN) console.warn(message)

        let stringified = typeof message !== 'string' ? JSON.stringify(message, Object.getOwnPropertyNames(message)) : message.toString()

        await RequestDebug({ 
            method: METHODS.POST,
            path: URL,
            body: {
                message: stringified,
                func,
                path: window?.location?.pathname || null,
                type: LOG_TYPES.WARNING
            }
        })
    }

    catch (error) {
        console.error('OnWarningConsole', error)
    }
}

const OnErrorConsole = async (func: string, message: unknown) => {
    try {
        const { User } = AuthState.getState()
        if (User && User?.Role === USER_ROLES.ADMIN) console.error(message)
        
        let stringified = typeof message !== 'string' ? JSON.stringify(message, Object.getOwnPropertyNames(message)) : message.toString()

        await RequestDebug({ 
            method: METHODS.POST,
            path: URL,
            body: {
                message: stringified,
                func,
                path: window?.location?.pathname || null,
                type: LOG_TYPES.ERROR
            }
        })
    }

    catch (error) {
        console.error('OnErrorConsole', error)
    }
}

const Console = {
    Error: (func: string, message: unknown) => OnErrorConsole(func, message),
    Info: (func: string, message: unknown) => OnInfoConsole(func, message),
    Warning: (func: string, message: unknown) => OnWarningConsole(func, message),
    Debug: (func: string, message: unknown) => OnDebugConsole(func, message)
}

export default Console