import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useRouter } from 'next/router'
import { Translation } from '@/helpers/generals'
import { Button } from '@/ui/views'
import { AuthState, ConfirmationState } from '@/data/states'
import { HandleCloseAccount } from '@/actions/users'

import { BUTTON_TYPES } from '@/data/constants'
import { TrashIcon } from '@/ui/icons'

const Danger: FC = (): ReactNode => {
    const { push } = useRouter()
    
    const { SetConfirmationState } = ConfirmationState(
        useShallow(state => {
            return {
                SetConfirmationState: state.SetConfirmationState
            }
        })
    )

    const { 
        User, 
        UpdatingUser,
        ClosingAccount 
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                UpdatingUser: state.UpdatingUser,
                ClosingAccount: state.ClosingAccount
            }
        })
    )

    const HandleClosingAccountModal = () => {
        SetConfirmationState({
            Title: Translation('close-account-modal-title'),
            Open: true,
            onConfirm: () => {
                HandleCloseAccount(push)

                SetConfirmationState({
                    Title: '',
                    onConfirm: () => { },
                    Open: false
                })
            }
        })
    }

    if (User) return (
        <Fragment>
            <p className='ml-0.5 mb-2 text-[15px] font-bold text-gray-900 mt-8'>
                {Translation('danger-zone')}
            </p>

            <div className='p-4 mt-2 bg-white rounded-xl flex-row gap-2'>
                <Button
                    type={BUTTON_TYPES.SECONDARY}
                    target='_blank'
                    className={`bg-red-100 hover:bg-red-200 text-red-500 ${UpdatingUser ? 'opacity-50 cursor-not-allowed ' : ''}`}
                    onClick={HandleClosingAccountModal}
                    disabled={UpdatingUser}
                    loading={ClosingAccount}
                    icon={<TrashIcon className='w-5 h-5 ' />}
                >
                    {Translation('close-account')}
                </Button>
            </div>
        </Fragment>
    )
}

export default Danger