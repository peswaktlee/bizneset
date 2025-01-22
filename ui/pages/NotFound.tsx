import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Translation } from '@/helpers/generals'
import { Link, PATHS } from '@/data/constants'

const NotFound: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <div className='text-center py-16 h-screen w-full flex items-center justify-center flex-col align-center'>
                <div className='flex justify-center align-center items-center'>
                    {/* <lottie-player
                        src='/json/LottieError.json'
                        background='transparent'
                        speed='1'
                        loop=''
                        autoplay='true'
                        style='height: 259px'
                    ></lottie-player> */}
                </div>

                <div className='w-full flex justify-center items-center flex-col align-center'>
                    <h1 className='mt-2 text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl'>
                        {Translation('page-not-found-title')}
                    </h1>

                    <p className='mt-5 text-base w-full lg:w-[50%] xl:w-[50%] md:w-[50%] text-gray-500'>
                        {Translation('page-not-found-description')}
                    </p>
                </div>
                    
                <div className='mt-6'>
                    <Link href={PATHS.HOME}>
                        <span className='text-base font-medium text-indigo-600 hover:text-indigo-500'>
                            {Translation('go-back-home')}
                        </span>
                    </Link>
                </div>
            </div>
        </NormalLayout>
    )
}

export default NotFound