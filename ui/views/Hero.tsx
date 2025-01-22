import type { FC, ReactNode } from 'react'

import { Header } from '@/ui/views'
import { Absolutos, Title, Filters } from '@/ui/components/hero'

const Hero: FC = (): ReactNode => {
    return (
        <div className='h-[442px] bg-[var(--primary-bg)] w-full flex relative overflow-hidden'>
            <Absolutos />

            <div className='max-w-6xl mx-auto relative h-full flex flex-col items-center w-full'>
                <span className='z-50 pt-2 w-full'>
                    <Header />
                </span>

                <div className='z-30 w-full h-full flex flex-col justify-center items-start pb-6'>
                    <Title />
                    <Filters />
                </div>
            </div>
        </div>
    )
}

export default Hero