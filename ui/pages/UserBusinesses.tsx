import type { FC, ReactNode } from 'react'

import { useUserBusinesses } from '@/hooks'
import { List, Error, Loading, Empty } from '@/ui/components/user-businesses-list'

const UserBusinesses: FC = (): ReactNode => {
    const { InfiniteEndReference } = useUserBusinesses()

    return (
        <div className='relative py-3 mt-4'>
            <List />
            <Error />
            <Loading />
            <Empty />

            <div className='w-full h-[1px] mt-[1px] mb-8' ref={InfiniteEndReference} />
        </div>
    )
}

export default UserBusinesses