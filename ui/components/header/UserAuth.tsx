import type { FC, MouseEvent, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { useShallow } from 'zustand/react/shallow'
import { AuthState } from '@/data/states'
import { Button } from '@/ui/views'
import { AuthInvoke } from '@/actions/users'
import { Translation } from '@/helpers/generals'
import { GoogleIcon } from '@/ui/icons'

const UserAuth: FC = (): ReactNode => {
    const { push } = useRouter()

    const {
        User,
        Loading,
        SmallLoading
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                SmallLoading: state.SmallLoading
            }
        })
    )

    if (User === false && !Loading && !SmallLoading) return (
        <div className='w-full flex items-center'>
           

            <Button
                type='secondary'
                className='bg-gray-50 border border-gray-200 relative text-sm w-10 h-10 rounded-xl md:mr-0'
                icon={<GoogleIcon className='w-7 h-7 text-gray-600' />}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.blur()
                    AuthInvoke(push)
                }}
            >
                <div className='py-3 px-4 flex justify-end items-end flex-col'>
                    <span className='block text-sm font-semibold text-gray-800'>
                        {Translation('sign-in-with-google')}
                    </span>
                </div>
            </Button>
        </div>
    )
}

export default UserAuth