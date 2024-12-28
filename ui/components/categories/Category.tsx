import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { HandleCategoryIcon } from '@/helpers/generals'
import { PATHS, Link } from '@/data/constants'

const Category: FC<CategoryInterface & { isActive: boolean }> = (props): ReactNode => {
    const { _id, Name, Slug, isActive } = props

    const Icon = HandleCategoryIcon(Slug)

    return (
        <Link 
            id={_id}
            href={`/${PATHS.CATEGORIES}/${Name}`} 
            className='hover:cursor-pointer relative flex flex-col items-center justify-center gap-2 rounded-lg shadow-sm h-atuo hover:opacity-80 transition-all duration-500'
        >
            <div>
                {/* @ts-ignore */}
                <Icon className='w-[22px] h-[22px] text-gray-700' />
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