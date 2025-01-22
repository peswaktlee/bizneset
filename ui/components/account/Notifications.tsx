import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Checkbox } from '@/ui/views'
import { AuthState } from '@/data/states'

const Notifications: FC = (): ReactNode => {
    const { User, UpdatingUser } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                UpdatingUser: state.UpdatingUser
            }
        })
    )

    const HandleReceiveUpdateAboutYourAccount = () => {
        // if (localUserForm && !Upading) {
        //     const updatedUser = {
        //         ...localUserForm,
        //         Settings: {
        //             ...localUserForm.Settings,
        //             ReceiveUpdateAboutYourAccount: !localUserForm.Settings?.ReceiveUpdateAboutYourAccount
        //         }
        //     }

        //     setLocalUserForm(updatedUser)
        // }
    }


    if (User) return (
        <Fragment>
            <p className='ml-0.5 mb-2 text-[15px] font-bold text-gray-900 mt-8'>
                {Translation('notifications')}
            </p>

            <div className='p-4 mt-2 bg-white shadow-sm rounded-xl'>
                <div className='flex flex-col gap-7'>
                    <Checkbox
                        id='ReceiveUpdateAboutYourAccount'
                        label={Translation('send-notification-for-business-submit-statuses')}
                        message='send-notification-for-business-submit-statuses'
                        value={false}
                        required={false}
                        disabled={UpdatingUser}
                        onClick={HandleReceiveUpdateAboutYourAccount}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Notifications