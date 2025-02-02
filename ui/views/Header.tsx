import type { FC, ReactNode } from 'react'

import { usePath } from '@/hooks'
import { Logo, User } from '@/ui/components/header'
import { PATHS } from '@/data/constants'

const Header: FC = (): ReactNode => {
    const path = usePath()
    const isHome = path === PATHS.HOME || path?.includes(PATHS.CATEGORIES)

    return (
        <header className={`w-full ${isHome ? 'bg-transparent' : 'bg-white border-b h-14 border-gray-100'}`}>
            <nav className='py-2.5 max-w-6xl mx-auto rounded-lg flex w-full justify-between items-center'>
                <Logo />
                <User />
            </nav>
        </header>
    )
}

export default Header