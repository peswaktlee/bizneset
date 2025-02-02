import type { FC, ReactNode } from 'react'

import { usePath } from '@/hooks'
import { LogoIcon } from '@/ui/icons'
import { Link } from '@/data/constants'
import { PATHS } from '@/data/constants'
import { ResetStates } from '@/actions/generals'

const Logo: FC = (): ReactNode => {
    const path = usePath()
    const isHome = path === PATHS.HOME || path?.includes(PATHS.CATEGORIES)

    return (
        <Link 
            href={PATHS.HOME} 
            className='hover:opacity-90 transition-all duration-500 ease-in-out'
            onClick={() => ResetStates(false)}
        >
            <LogoIcon 
                width={114} 
                color={isHome ? '#fff' : '#222'}  
            />
        </Link>
    )
}

export default Logo