import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesState } from '@/data/states'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'
import { LoadingSkeleton } from '@/ui/components/businesses-list'

const Loading: FC = (): ReactNode => {
    const { 
        Loading: BusinessesLoading, 
        Error, 
        Businesses 
    } = BusinessesState(
        useShallow(state => {
            return {
                Loading: state.Loading,
                Error: state.Error,
                Businesses: state.Businesses
            }
        })
    )

    if (BusinessesLoading && !Error && Businesses?.length === 0) return (
        <div className='w-full h-auto grid grid-cols-4 gap-x-8 gap-y-8'>
            {GenerateRandomNumberOfBlankArrays(24, 24).map((num: number) => (
                <Fragment key={num}>
                    <LoadingSkeleton />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading