import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Link, PATHS } from '@/data/constants'
import { Info, Images, Decorations } from '@/ui/components/business-list-item'

const Business: FC<BusinessInterface> = (props): ReactNode => {
    const { Slug } = props

    return (
        <Link 
            href={`/${PATHS.BUSSINES}/${Slug}`} 
            className='hover:cursor-pointer flex flex-col items-center justify-center gap-2 hover:opacity-80 transition-all duration-500 relative'
        >
            <div className='relative w-full'>
                <Decorations />
                <Images {...props} />
            </div>

            <Info {...props} />
        </Link>
    )
}

export default Business