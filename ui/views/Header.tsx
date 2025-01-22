import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { usePath } from '@/hooks'
import { AppState } from '@/data/states'
import { Logo, User } from '@/ui/components/header'
import { PATHS } from '@/data/constants'

const Header: FC = (props): ReactNode => {
    const path = usePath()
    const isHome = path === PATHS.HOME

    const { FixedHeader } = AppState(
        useShallow(state => {
            return {
                FixedHeader: state.FixedHeader
            }
        })
    )

    return (
        <header className={`w-full ${isHome ? FixedHeader ? '' : 'bg-transparent' : 'bg-white border-b h-14 border-gray-100 fixed'}`}>
            <nav className='py-2.5 max-w-6xl mx-auto rounded-lg flex w-full justify-between items-center'>
                <Logo />
                <User />
            </nav>
        </header>
    )
}

export default Header