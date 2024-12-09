import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { CategoriesState } from '@/data/states'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'

const SkeletonLoading: FC = (): ReactNode => {
    return (
        <div className='bg-gray-50 rounded-xl p-4 transition-all duration-500 ease-in-out'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col'>
                    <div className='bg-gray-200 animate-pulse w-32 h-5 rounded-full mt-0' />
                    <div className='bg-gray-100 animate-pulse w-24 h-6 rounded-full mt-1' />
                    <div className='bg-gray-200 bg-opacity-25 animate-pulse w-48 h-3 rounded-full mt-1' />
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
        <div className='w-full gap-2 flex flex-col mt-2'>
            {GenerateRandomNumberOfBlankArrays(10, 10).map((num: number) => (
                <Fragment key={num}>
                    <SkeletonLoading />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading