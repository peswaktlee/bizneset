import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { HandleCategoryIcon } from '@/helpers/generals'
import { BusinessesState } from '@/data/states'
import { PATHS, Link } from '@/data/constants'

const Category: FC<CategoryInterface & { isActive: boolean }> = (props): ReactNode => {
    const { _id, Name, Slug, isActive } = props

    const Icon = HandleCategoryIcon(Slug)

    const { Filters, SetBusinessesState } = BusinessesState(
        useShallow(
            state => {
                return {
                    Filters: state.Filters,
                    SetBusinessesState: state.SetBusinessesState
                }
            }
        )
    )

    const HandleSetCategory = () => {
        const category = _id
        const currentCategory = Filters?.Category

        const isDifferent = currentCategory !== category

        if (isDifferent) SetBusinessesState({
            Filters: {
                ...Filters,
                Category: category
            }
        })
    }

    return (
        <Link 
            id={_id}
            href={`/${PATHS.CATEGORIES}/${Slug}`} 
            onClick={HandleSetCategory}
            className={`relative group flex flex-col items-center justify-center gap-2 rounded-lg h-auto  ${isActive ? 'cursor-default' : 'cursor-pointer transition-all ease-in-out duration-500'}`}
        >
            <Icon 
                stroke={isActive ? 'url(#gradient-icon)' : 'currentColor'}
                className={`w-[22px] h-[22px] ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`} 
            />
           
            <span className={`text-sm text-nowrap font-medium mt-1 ${isActive ? 'text-gradient' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {Name}
            </span>

            { isActive && <div className='bg-gradient w-full h-[2px] rounded-full' /> }
            { !isActive && <div className='bg-transparent w-full h-[2px] rounded-full' /> }
        </Link>
    )
}

export default Category