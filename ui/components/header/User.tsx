import type { FC, ReactNode } from 'react'

import { AuthState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'
import { OutsideElementClick } from '@/helpers/events'

import { 
    UserSkeleton,
    UserAuth,
    UserProfile,
    UserDropdownModal
} from '@/ui/components/header'

const User: FC = (): ReactNode => {
    const { SetAuthState } = AuthState(
        useShallow(state => {
            return {
                SetAuthState: state.SetAuthState
            }
        })
    )

    return (
        // @ts-ignore
        <div ref={OutsideElementClick(() => SetAuthState({ UserModal: false }))} className='select-none flex items-center relative z-10'>
            <UserSkeleton />
            <UserAuth />
            <UserProfile />
            <UserDropdownModal />
        </div>
    )
}

export default User