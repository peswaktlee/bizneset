import type { FC, ReactNode } from 'react'

import { LogoIcon } from '@/ui/icons'
import { Link } from '@/data/constants'
import { PATHS } from '@/data/constants'

const Logo: FC = (): ReactNode => {
    return (
        <Link href={PATHS.HOME}>
            <LogoIcon />
        </Link>
    )
}

export default Logo