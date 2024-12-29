import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { AppState } from '@/data/states'
import { LogoIcon } from '@/ui/icons'
import { Link } from '@/data/constants'
import { PATHS } from '@/data/constants'

const Logo: FC = (): ReactNode => {
    const { FixedHeader } = AppState(
        useShallow(state => {
            return {
                FixedHeader: state.FixedHeader
            }
        })
    )

    return (
        <Link href={PATHS.HOME}>
            <LogoIcon color={!FixedHeader ? '#fff' : undefined}  />
        </Link>
    )
}

export default Logo