import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { AuthState } from '@/data/states'

const UserSkeleton: FC = (): ReactNode => {
    const { User: Auth, Loading, SmallLoading } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                SmallLoading: state.SmallLoading
            }
        })
    )

    if (Auth === null || Loading || SmallLoading) return (
        <div className='w-full flex justify-between my-2'>
            <div className='flex flex-col'>
                <div className='bg-gray-200 animate-pulse w-32 h-4 rounded-full mt-2' />
                <div className='flex justify-end'>
                    <div className='bg-gray-100 animate-pulse w-20 h-3 rounded-full mt-2' />
                </div>
            </div>

            <div className='flex flex-col ml-2'>
                <div className='bg-gray-100 animate-pulse w-10 h-10 rounded-xl mt-2' />
            </div>
        </div>
    )
}

export default UserSkeleton