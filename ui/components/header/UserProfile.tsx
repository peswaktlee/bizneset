import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { AuthState } from '@/data/states'
import { Button } from '@/ui/views'
import { ImageOnDrag, ImageOnError } from '@/helpers/events'
import { UserIcon } from '@heroicons/react/24/outline'

const UserProfile: FC = (): ReactNode => {
    const {
        User,
        Loading,
        UserModal,
        SetAuthState
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                UserModal: state.UserModal,
                SetAuthState: state.SetAuthState
            }
        })
    )

    const HandleUserModal = () => {
        SetAuthState({ UserModal: !UserModal })
    }

    if (User && !Loading) return (
        <div className='w-full flex items-center'>
            <div className='py-3 px-4 flex justify-end items-end flex-col'>
                <span className='block text-sm font-semibold text-gray-800'>
                    {User?.Name?.trim()?.length > 32 ? `${User?.Name?.slice(0, 20)?.trim()}...` : User?.Name}
                </span>

                <div className='flex justify-end mt-0.5'>
                    <span className='text-[11px] text-gray-500 bg-gray-50 p-.5 px-2 rounded-full truncate align-end flex justify-end'>
                        {User?.Email}
                    </span>
                </div>
            </div>

            <Button
                type='secondary'
                onClick={HandleUserModal}
                className='p-1.5 border border-gray-200 relative text-sm w-10 h-10 rounded-xl md:mr-0'
                icon={<UserIcon className='w-7 h-7 text-gray-500' />}
            >
                <img
                    className='w-full h-full p-[2px] rounded-xl absolute top-0 left-0 object-cover bottom-0 right-0 z-10'
                    src={User?.Avatar}
                    alt={User?.Name}
                    onError={ImageOnError}
                    onDragStart={ImageOnDrag}
                />
            </Button>

            <div className='p-2' />
        </div>
    )
}

export default UserProfile