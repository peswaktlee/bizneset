import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { Header } from '@/ui/views'

const Hero: FC = (): ReactNode => {
    return (
        <div className='h-[400px] bg-[#100740] w-full flex relative overflow-hidden'>
            <div className='w-full h-full bg-[#100740] absolute top-0 left-0 z-10 opacity-70' />
            <img alt='image' src='https://cdn.peswaktlee.com/assets/home-hero.webp' className='w-full h-full object-cover absolute top-0 left-0 z-0' />

            <div className='max-w-6xl mx-auto relative h-full flex flex-col items-center w-full'>
                <span className='z-50 pt-2 w-full'>
                    <Header />
                </span>

                <div className='z-30 w-full h-full flex flex-col justify-center items-start pb-12'>
                    <div className='max-w-xl mb-6 z-1'>
                        <h1 className='text-[22px] lg:text-4xl text-white font-bold mt-4 md:mt-7 ml-1 mb-0.5'>
                            {Translation('hero-title')}
                        </h1>
                    </div>

                    <div className='flex bg-white pl-4 pr-2 py-1 rounded-full w-auto items-center shadow-xl'>
                        <div className='rounded-l-full p-1'>
                            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                                {Translation('find-business')}
                            </p>

                            <input 
                                placeholder='Kerko biznesit tuaj'
                                className='text-[15px] text-black font-normal mt-1 ml-1'
                            />
                        </div>

                        <div className='mx-4 bg-gray-100 w-[2px] h-10 rounded-full' />

                        <div className='p-1'>
                            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                                {Translation('country')}
                            </p>

                            <input
                                placeholder={Translation('select-country')}
                                className='text-[15px] text-black font-normal mt-1 ml-1'
                            />
                        </div>

                        <div className='mx-4 bg-gray-100 w-[2px] h-10 rounded-full' />

                        <div className='p-1'>
                            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                                {Translation('city')}
                            </p>

                            <input 
                                placeholder={Translation('select-city')}
                                className='text-[15px] text-black font-normal mt-1 ml-1' 
                            />
                        </div>

                        <div className='flex items-center justify-center rounded-r-full p-1'>
                            <button className='bg-blue-200 rounded-full p-2'>
                                {Translation('search')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero