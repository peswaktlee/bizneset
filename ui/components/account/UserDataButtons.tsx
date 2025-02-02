import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Button } from '@/ui/views'
import { AuthState } from '@/data/states'
import { LoadingIcon, SuccessIcon } from '@/ui/icons'
import { HandleUpdateUser } from '@/actions/users'

const UserDataButtons: FC = (): ReactNode => {
    const { UpdatingUser } = AuthState(
        useShallow(state => {
            return {
                UpdatingUser: state.UpdatingUser
            }
        })
    )

    return (
        <div className='flex justify-end mt-6'>
            <Button
                className={`${UpdatingUser? 'opacity-50 cursor-not-allowed ' : ''}`}
                onClick={() => HandleUpdateUser()}
                disabled={UpdatingUser}
                loading={UpdatingUser}
                icon={UpdatingUser ? <LoadingIcon className='w-5 h-5' /> : <SuccessIcon strokeWidth={2} className='w-5 h-5' />}
            >
                {Translation('save-changes')}
            </Button>
        </div>
    )
}

export default UserDataButtons