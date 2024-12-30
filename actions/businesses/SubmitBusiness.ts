import type { RouterPathFunctionType } from '@/ts'

import { Request } from '@/helpers/http'
import { Translation } from '@/helpers/generals'
import { Console } from '@/helpers/debug'
import { BusinessesFormState } from '@/data/states'
import { NotificationState, AuthState } from '@/data/states'
import { ENDPOINTS, PATHS, METHODS } from '@/data/constants'

// todo: mos e le dy biznese pa me aprovu tjeteren me postu

const SubmitBusiness = async (push: RouterPathFunctionType) => {
    const { Notification } = NotificationState.getState()
    const { Creating, SetBusinessFormState } = BusinessesFormState.getState()

    let redirect = false

    try {
        const { User, SetAuthState } = AuthState.getState()
        
        if (!Creating && User) {
            !Creating && SetBusinessFormState({ 
                Creating: true
            })

            const { success, data, message } = await Request({ 
                method: METHODS.POST,
                path: ENDPOINTS.BUSINESSES.SUBMIT
            })

            if (success && data) {
                redirect = true

                SetAuthState({ 
                    User: { 
                        ...User, 
                        Businesses: (User?.Businesses + 1)
                    }
                })

                Notification.Success(message)
            }
        
            else Notification.Error(Translation('something-went-wrong-while-trying-to-submit-business'))
        }
    }

    catch (error) {
        Console.Error('SubmitBusiness', error)
        Notification.Error(Translation('something-went-wrong-while-trying-to-submit-business'))
    }

    finally {
        SetBusinessFormState({ Creating: false })
        if (redirect) push(`/${PATHS.USER_BUSINESSES}`)
    }
}

export default SubmitBusiness