import type { FC, ReactNode } from 'react'
import type { NormalLayoutTypes } from '@/ts'

import { Confirmation, Notification } from '@/ui/components/generals'

// import { Header } from '@/ui/views'

const NormalLayout: FC<NormalLayoutTypes> = (props): ReactNode => {
    const { children, className } = props

    return (
        <div className='w-full h-full relative'>
            <div className='w-full h-full max-w-6xl mx-auto'>
                {children}
            </div>

            <Confirmation />
            <Notification />

            {/* <Header />

            <div className='w-full h-[1px] bg-gray-200 my-6' /> */}

            
        </div>
    )
}

export default NormalLayout