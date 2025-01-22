import { Request } from '@/helpers/http'
import { NotificationState, AuthState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { Translation } from '@/helpers/generals'
import { ENDPOINTS, METHODS } from '@/data/constants'

const HandleUpdateUser = async () => {
    const { Notification } = NotificationState.getState()

    const { 
        User, 
        UpdatingUser, 
        SetAuthState, 
        UserForm 
    } = AuthState.getState()

    if (User && !UpdatingUser && UserForm) {
        SetAuthState({ UpdatingUser: true })

        try {
            const { success, message } = await Request({
                method: METHODS.POST,
                path: ENDPOINTS.USERS.UPDATE_USER,
                body: {
                    name: UserForm?.Name,
                    surname: UserForm?.Surname,
                    email: UserForm?.Email
                }
            })

            if (!success) Notification.Error(message)

            else {
                Notification.Success(message)

                SetAuthState({
                    User: {
                        ...User,
                        Name: UserForm?.Name,
                        Surname: UserForm?.Surname,
                        Email: UserForm?.Email
                    },
                    UserForm: UserForm
                })
            }
        }

        catch (error) {
            Console.Error('HandleUpdateUser', error)
            Notification.Error(Translation('something-went-wrong-while-trying-to-update-your-profile'))
        }

        finally {
            SetAuthState({ UpdatingUser: false })
        }
    }
}

export default HandleUpdateUser