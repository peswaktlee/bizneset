import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Categories, Businesses as BusinessList } from '@/ui/views'

const BusinessesComponent: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <Categories />
            <BusinessList />
        </NormalLayout>
    )
}

export default BusinessesComponent