import type { FC, ReactNode } from 'react'

import { useSimilarBusinesses } from '@/hooks'
import { List, Error, Loading, Empty } from '@/ui/components/similar-businesses'

const SimilarBusinesses: FC = (): ReactNode => {
    useSimilarBusinesses()
    
    return (
        <div className='relative py-3 mt-4'>
            <List />
            <Error />
            <Loading />
            <Empty />
        </div>
    )
}

export default SimilarBusinesses