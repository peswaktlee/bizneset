import type { FC, ReactNode } from 'react'

import { List, Empty, Loading, Error } from '@/ui/components/categories'
import { useCategories, useCategoryPath } from '@/hooks'

const Categories: FC = (): ReactNode => {
    useCategories()
    useCategoryPath()

    return (
        <div className='flow-root relative pb-0 pt-5'>
            <List />
            <Error />
            <Empty />
            <Loading />
        </div>
    )
}

export default Categories