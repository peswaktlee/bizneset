import { Request } from '@/helpers/http'
import { NotificationState, AuthState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { Translation } from '@/helpers/generals'
import { NotificationBooleanValidation, UserNameValidation, UserSurnameValidation } from '@/helpers/validations'
import { ENDPOINTS, METHODS } from '@/data/constants'

const HandleUpdateUser = async () => {
    const { Notification } = NotificationState.getState()

    const { 
        User, 
        UserFormErrors,
        UpdatingUser, 
        SetAuthState, 
        UserForm 
    } = AuthState.getState()

    const nameValidation = UserNameValidation(UserForm?.Name)
    const surnameValidation = UserSurnameValidation(UserForm?.Surname)
    const notificationOnSubmitValidation = NotificationBooleanValidation(UserForm?.OnBusinessStatuses)

    const isError =
        nameValidation.error ||
        surnameValidation.error ||
        notificationOnSubmitValidation.error

    if (User && !UpdatingUser && UserForm) {
        SetAuthState({ UpdatingUser: true })

        try {
            if (!isError) {
                const { success, message } = await Request({
                    method: METHODS.POST,
                    path: ENDPOINTS.USERS.UPDATE_USER,
                    body: {
                        name: UserForm?.Name,
                        surname: UserForm?.Surname,
                        onBusinessStatuses: UserForm?.OnBusinessStatuses
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
                            Notifications: {
                                ...User?.Notifications,
                                OnBusinessStatuses: UserForm?.OnBusinessStatuses
                            }
                        },
                        UserForm: UserForm
                    })
                }
            }

            else SetAuthState({
                UserFormErrors: {
                    ...UserFormErrors,
                    Name: nameValidation.error,
                    Surname: surnameValidation.error,
                    OnBusinessStatuses: notificationOnSubmitValidation.error
                }
            })
                
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