import type { FC, ReactNode } from 'react'

import { useMemo } from 'react'
import { FooterSocialMediaLinks } from '@/data/lists'
import { Link, PATHS } from '@/data/constants'
import { Translation } from '@/helpers/generals'

const Footer: FC = (): ReactNode => {
    const list = useMemo(() => FooterSocialMediaLinks(), [])

    return (
        <footer className='flex flex-col w-full h-auto'>
            <div className='bg-gray-200 w-full h-[1px] my-2' />
            
            <div className='max-w-6xl mb-2 mx-auto w-full items-center flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <p className='text-sm text-gray-700 font-medium'>
                            &copy; {new Date().getFullYear()}&nbsp;
                            
                            <Link 
                                href={`${PATHS.HOME}`} 
                                className='hover:text-[#377DFF] transition-all' 
                                rel='noreferrer'
                            >
                                {Translation('app-name')}
                            </Link>
                        </p>
                    </div>

                    <div className='h-4 w-[1px] bg-gray-200' />

                    <div className='flex items-center gap-3'>
                        <Link 
                            href={`/${PATHS.TERMS}`} 
                            className='hover:text-[#377DFF] transition-all text-[13px] text-gray-600' 
                            rel='noreferrer'
                        >
                            {Translation('terms-of-services')}
                        </Link>

                        <Link 
                            href={`/${PATHS.PRIVACY}`} 
                            className='hover:text-[#377DFF] transition-all text-[13px] text-gray-600' 
                            rel='noreferrer'
                        >
                            {Translation('privacy-policty')}
                        </Link>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    {
                        list?.map((item) => {
                            const { href, icon } = item

                            const Icon = icon

                            return (
                                <a 
                                    key={href}
                                    target='_blank'
                                    href={href}
                                    className='p-1 rounded-full transition-all ease-in-out duration-500 cursor-pointer group'
                                >
                                    <Icon className='text-gray-900 group-hover:text-gray-500 transition-all ease-in-out duration-500' />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer