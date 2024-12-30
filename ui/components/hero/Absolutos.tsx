import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { Translation } from '@/helpers/generals'
import { CDN_ASSETS } from '@/data/constants'

const Absolutos: FC = (): ReactNode => {
    return (
        <Fragment>
            <div className='w-full h-full bg-[var(--primary-bg)] absolute top-0 left-0 z-10 opacity-80' />

            <img 
                alt={Translation('home-hero')}
                src={CDN_ASSETS.HOME_HERO} 
                className='w-full h-full object-cover absolute top-0 left-0 z-0' 
            />
        </Fragment>
    )
}

export default Absolutos