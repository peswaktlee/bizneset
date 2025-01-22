import type { FC, ReactNode } from 'react'
import type { NormalLayoutTypes } from '@/ts'

import { Confirmation, Notification } from '@/ui/components/generals'
import { Auth } from '@/ui/views'

const NormalLayout: FC<NormalLayoutTypes> = (props): ReactNode => {
    const { children } = props

    return (
        <div className='w-full h-screen relative overflow-y-scroll scrollbar-hidden'>
            <div className='w-full h-full mx-auto relative overflow-y-scroll scrollbar-hidden'>
                {children}
            </div>
            
            <Confirmation />
            <Notification />
            <Auth />
        </div>
    )
}

export default NormalLayout