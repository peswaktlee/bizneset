import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { CategoriesState } from '@/data/states'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'

const SkeletonLoading: FC = (): ReactNode => {
    return (
        <div className='transition-all duration-500 ease-in-out'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-gray-200 animate-pulse w-8 h-8 rounded-full mt-0' />
                    <div className='bg-gray-200 bg-opacity-50 animate-pulse w-14 h-5 rounded-full mt-1' />
                </div>
            </div>
        </div>
    )
}

const Loading: FC = (): ReactNode => {
    const { 
        Loading: CategoriesLoading, 
        Error, 
        Categories 
    } = CategoriesState(
        useShallow(state => {
            return {
                Loading: state.Loading,
                Error: state.Error,
                Categories: state.Categories
            }
        })
    )

    if (CategoriesLoading && !Error && Categories?.length === 0) return (
        <div className='w-full flex-row gap-8 flex mt-2'>
            {GenerateRandomNumberOfBlankArrays(12, 12).map((num: number) => (
                <Fragment key={num}>
                    <SkeletonLoading />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading