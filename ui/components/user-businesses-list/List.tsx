import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { UserBusinessesState } from '@/data/states'
import { Business } from '@/ui/components/businesses'

const List: FC = (): ReactNode => {
    const { 
        UserBusinesses,
        Loading, 
        Error 
    } = UserBusinessesState(
        useShallow(
            state => {
                return {
                    UserBusinesses: state.UserBusinesses,
                    Loading: state.Loading,
                    Error: state.Error
                }
            }
        )
    )

    if (!Error && !Loading && UserBusinesses?.length !== 0) return (
        <div className='w-full h-auto grid grid-cols-4 gap-x-8 gap-y-8'>
            {
                UserBusinesses.map((business: BusinessInterface, index) => (
                    <Fragment key={index}>
                        <Business {...business} />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default List