import type { FC, ReactNode } from 'react'

const LoadingSkeleton: FC = (): ReactNode => {
    return (
        <div className='transition-all duration-500 ease-in-out'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-gray-200 animate-pulse w-8 h-8 rounded-full mt-0' />
                    <div className='bg-gray-200 bg-opacity-50 animate-pulse w-16 h-5 rounded-full mt-1' />
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton