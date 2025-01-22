import type { RouterPathFunctionType } from '@/ts'

import { Request } from '@/helpers/http'
import { NotificationState, AuthState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { Translation } from '@/helpers/generals'
import { UserLogout } from '@/actions/users'
import { ENDPOINTS, METHODS, PATHS } from '@/data/constants'

const HandleCloseAccount = async (push: RouterPathFunctionType) => {
    const { User, UpdatingUser, SetAuthState } = AuthState.getState()
    const { Notification } = NotificationState.getState()
 
    if (User && !UpdatingUser) {
        SetAuthState({ ClosingAccount: true })

        try {
            const { success, message } = await Request({
                method: METHODS.POST,
                path: ENDPOINTS.USERS.CLOSE_ACCOUNT
            })


            if (success) {
                Notification.Success(message)

                UserLogout()
                push(`/${PATHS.HOME}`)
            }
                
            else Notification.Error(message)
        }

        catch (error) {
            Console.Error('HandleCloseAccount', error)
            Notification.Error(Translation('something-went-wrong-while-trying-to-close-your-account'))
        }
        
        finally{
            SetAuthState({ ClosingAccount: false })
        }
    }
}

export default HandleCloseAccount