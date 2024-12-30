import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { CategoriesState } from '@/data/states'
import { LoadingSkeleton } from '@/ui/components/categories'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'

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
        <div className='w-full flex-row gap-9 flex mt-2 overflow-hidden'>
            {GenerateRandomNumberOfBlankArrays(12, 12).map((num: number) => (
                <Fragment key={num}>
                    <LoadingSkeleton />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading