import type { FC, ReactNode } from 'react'
import { Translation } from '@/helpers/generals'

const Title: FC = (): ReactNode => {
    return (
        <div className='max-w-[650px] mb-6 z-1'>
            <h1 className='text-5xl text-white font-bold mb-1'>
                {Translation('hero-title')}
            </h1>
        </div>
    )
}

export default Title