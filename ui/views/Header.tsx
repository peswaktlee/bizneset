import type { FC, ReactNode } from 'react'

import { Logo, Filters, User } from '@/ui/components/header'

const Header: FC = (): ReactNode => {
    return (
        <nav className='px-4 py-3 mt-2 rounded-lg flex w-full justify-between items-center'>
            <Logo />
            <Filters />
            <User />
        </nav>
    )
}

export default Header