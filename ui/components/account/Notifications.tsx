import type { ChangeEvent, FC, ReactNode } from 'react'
import type { UserFormInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Checkbox } from '@/ui/views'
import { AuthState } from '@/data/states'

const Notifications: FC = (): ReactNode => {
    const { 
        User, 
        UpdatingUser, 
        UserForm, 
        UserFormErrors,
        SetAuthState 
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                UpdatingUser: state.UpdatingUser,
                UserForm: state.UserForm,
                UserFormErrors: state.UserFormErrors,
                SetAuthState: state.SetAuthState
            }
        })
    )

    const HandleCheckboxes = (target: keyof UserFormInterface) => {
        const newValue = !UserForm[target]

        const form = UserForm 
        const formErros = UserFormErrors

        // @ts-ignore
        form[target] = newValue
        formErros[target] = true

        SetAuthState({ 
            UserForm: { ...form },
            UserFormErrors: { ...formErros }
        })
    }


    if (User) return (
        <Fragment>
            <p className='ml-0.5 mb-2 text-[15px] font-bold text-gray-900 mt-8'>
                {Translation('notifications')}
            </p>

            <div className='p-4 mt-2 bg-white shadow-sm rounded-xl'>
                <div className='flex flex-col gap-7'>
                    <Checkbox
                        id='notifiction-on-subsmit-statuses'
                        label={Translation('send-notification-for-business-submit-statuses')}
                        message='yes'
                        value={UserForm?.OnBusinessStatuses}
                        required={false}
                        disabled={UpdatingUser}
                        onClick={() => HandleCheckboxes('OnBusinessStatuses')}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Notifications