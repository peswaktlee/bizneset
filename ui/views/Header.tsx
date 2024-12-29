import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { AppState } from '@/data/states'
import { Logo, User } from '@/ui/components/header'

const Header: FC = (): ReactNode => {
    const { FixedHeader } = AppState(
        useShallow(state => {
            return {
                FixedHeader: state.FixedHeader
            }
        })
    )

    console.log('FixedHeader', FixedHeader)

    return (
        <header className='max-w-6xl mx-auto'>
            <nav className={`px-4 py-3 mt-2 rounded-lg flex w-full justify-between items-center ${FixedHeader ? 'bg-white shadow-md fixed' : 'bg-transparent w-full'}`}>
                <Logo />
                <User />
            </nav>
        </header>
    )
}

export default Header