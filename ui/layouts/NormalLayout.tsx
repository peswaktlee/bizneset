import type { FC,  ReactNode } from 'react'
import type { NormalLayoutTypes } from '@/ts'

import { Header } from '@/ui/views'

const NormalLayout: FC<NormalLayoutTypes> = (props): ReactNode => {
    const { children } = props
    
    return (
        <div className='w-full h-auto max-w-6xl mx-auto'>
            <Header />

            <div className='w-full h-[1px] bg-gray-200 my-6' />

            <div>
                {children}
            </div>
        </div>
    )
}

export default NormalLayout