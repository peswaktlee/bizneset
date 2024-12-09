import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { Link, PATHS } from '@/data/constants'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Category: FC<CategoryInterface & { isActive: boolean }> = (props): ReactNode => {
    const { Name, isActive } = props

    return (
        <Link 
            href={`/${PATHS.CATEGORIES}/${Name}`} 
            className='hover:cursor-pointer relative flex flex-col items-center justify-center gap-2 rounded-lg shadow-sm h-atuo hover:opacity-80 transition-all duration-500'
        >
            <div>
                <BriefcaseIcon className='w-[22px] h-[22px] text-gray-700' />
            </div>
                
            <span className='text-sm text-nowrap font-bold text-gray-700'>
                {Name}
            </span>

            { isActive && <div className='bg-gray-600 w-full h-[2px] rounded-full' /> }
            { !isActive && <div className='bg-transparent w-full h-[2px] rounded-full' /> }
        </Link>
    )
}

export default Category