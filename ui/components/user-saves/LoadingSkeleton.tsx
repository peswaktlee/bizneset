import type { FC, ReactNode } from 'react'

const LoadingSkeleton: FC = (): ReactNode => {
    return (
        <div className='transition-all duration-500 ease-in-out z-1'>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col items-center gap-2 w-full'>
                    <div className='bg-gray-200 animate-pulse w-full h-40 rounded-lg mt-0' />
                    
                    <div className='w-full'>
                        <div className='bg-gray-200 bg-opacity-50 animate-pulse w-[50%] h-5 rounded-full' />
                        <div className='bg-gray-200 bg-opacity-100 animate-pulse w-[80%] h-4 rounded-full mt-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton