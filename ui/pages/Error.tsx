import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Translation } from '@/helpers/generals'
import { LogoIcon } from '@/ui/icons'
import { Button } from '@/ui/views'
import { CDN_ASSETS, PATHS } from '@/data/constants'

const Error: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <div className='h-screen bg-[var(--primary-bg)] flex items-center flex-col justify-center overflow-hidden w-full relative z-50'>
                <div className='w-full h-full bg-[var(--primary-bg)] absolute top-0 left-0 z-10 opacity-90' />
                
                <img 
                    alt={Translation('home-hero')}
                    src={CDN_ASSETS.HOME_HERO} 
                    className='w-full h-full object-cover absolute top-0 left-0 z-0' 
                />

                <div className='h-full w-full flex items-center justify-center flex-col align-start z-20'>
                    <div className='max-w-[650px] mb-6 z-1'>
                        <LogoIcon stroke='white' />

                        <h1 className='text-5xl text-white font-bold mb-1 mt-10'>
                            {Translation('page-error-found-title')}
                        </h1>

                        <p className='text-base text-white/90 mt-2'>
                            {Translation('page-error-found-description')}
                        </p>

                        <div className='mt-6 flex'>
                            <Button
                                href={PATHS.HOME}
                                className='bg-white text-[var(--primary-bg)] hover:bg-white hover:text-[var(--primary-bg)] hover:opacity-90 transition-all duration-500 ease-in-out'
                            >
                                {Translation('go-back-home')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Error