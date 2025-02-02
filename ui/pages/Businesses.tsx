import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Categories, Businesses as BusinessList, Hero, Footer } from '@/ui/views'

const Businesses: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <Hero />

            <div className='w-full h-auto max-w-6xl mx-auto z-10'>
                <Categories />
                <BusinessList />
            </div>

            <Footer />
        </NormalLayout>
    )
}

export default Businesses