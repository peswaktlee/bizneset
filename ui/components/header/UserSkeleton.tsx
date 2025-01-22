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
        <div className='w-full gap-2 flex items-center'>
            <div className='bg-gray-100 animate-pulse w-20 h-5 rounded-full' />
            <div className='bg-gray-100 animate-pulse w-9 h-9 rounded-full' />
        </div>
    )
}

export default UserSkeleton