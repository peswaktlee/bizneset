import type { FC, ReactNode } from 'react'

import { List, Empty, Loading, Error } from '@/ui/components/categories'
import { useCategories } from '@/hooks'

const Categories: FC = (): ReactNode => {
    useCategories()

    return (
        <div className='flow-root relative py-3'>
            <div 
                style={{ background: 'linear-gradient(270deg, #ffffff90 0%, #ffffff00 100%)' }}
                className='w-80 h-full absolute top-0 right-0 z-10 pointer-events-none' 
            />

            <List />
            <Error />
            <Empty />
            <Loading />
            <Error />
        </div>
    )
}

export default Categories