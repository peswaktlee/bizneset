import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { usePath } from '@/hooks'
import { AppState } from '@/data/states'
import { LogoIcon } from '@/ui/icons'
import { Link } from '@/data/constants'
import { PATHS } from '@/data/constants'

const Logo: FC = (): ReactNode => {
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
        <Link href={PATHS.HOME}>
            <LogoIcon 
                width={114} 
                color={isHome ? FixedHeader ? '#222' : '#fff' : '#222'}  
            />
        </Link>
    )
}

export default Logo