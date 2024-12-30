import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { UserBusinessesState } from '@/data/states'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'
import { LoadingSkeleton } from '@/ui/components/businesses-list'

const Loading: FC = (): ReactNode => {
    const { 
        Loading: UserBusinessesLoading, 
        Error, 
        UserBusinesses 
    } = UserBusinessesState(
        useShallow(state => {
            return {
                Loading: state.Loading,
                Error: state.Error,
                UserBusinesses: state.UserBusinesses
            }
        })
    )

    if (UserBusinessesLoading && !Error && UserBusinesses?.length === 0) return (
        <div className='w-full h-auto grid grid-cols-4 gap-x-8 gap-y-8'>
            {GenerateRandomNumberOfBlankArrays(14, 14).map((num: number) => (
                <Fragment key={num}>
                    <LoadingSkeleton />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading