import type { FC, ReactNode } from 'react'
import type { NormalLayoutTypes } from '@/ts'

import { useEffect, useState } from 'react'
import { CircleBig, CircleSmall } from '@/ui/illustrations'
import { Confirmation, Notification } from '@/ui/components/generals'

const NormalLayout: FC<NormalLayoutTypes> = (props): ReactNode => {
    const { children } = props

    const [isLandscape, setIsLandscape] = useState(false)
    
    useEffect(() => {
        const isWindow = typeof window !== 'undefined'
    
        if (isWindow) {
            const handleOrientationChange = () => {
                if (typeof window !== 'undefined') {
                    setIsLandscape(window.innerWidth > window.innerHeight)
                }
            }
        
            window.matchMedia('(orientation: landscape)').addEventListener('change', handleOrientationChange)
        
            return () => {
                window.matchMedia('(orientation: landscape)').removeEventListener('change', handleOrientationChange)
            }
        }
    }, [])

    return (
        <div className='w-full h-screen relative'>
            <div className='absolute -top-[64px] -left-[64px] animate-spin-slow'>
                <CircleSmall width={246} height={246} />
            </div>

            <div className='absolute -bottom-[140px] -right-[140px] animate-spin-oposite'>
                <CircleBig width={464} height={464} />
            </div>

            <div className='w-full h-full max-w-6xl mx-auto relative'>
                {children}
            </div>

            <Confirmation />
            <Notification />
        </div>
    )
}

export default NormalLayout