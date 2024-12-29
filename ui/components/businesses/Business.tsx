import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Link, PATHS } from '@/data/constants'

const Business: FC<BusinessInterface> = (props): ReactNode => {
    const { Name, Slug, Image } = props

    return (
        <Link 
            href={`/${PATHS.BUSINESSES}/${Slug}`} 
            className='hover:cursor-pointer relative flex flex-col items-center justify-center gap-2 hover:opacity-80 transition-all duration-500'
        >
            <img
                src={Image}
                alt={Name}
                className='rounded-lg w-full h-64 object-cover'
            />

            <div className='flex flex-col justify-start items-start w-full mt-2'>
                <h3 className='text-md font-semibold text-black'>
                    {Name}
                </h3>

                <p className='text-sm text-gray-600 mt-1'>
                    https//{Name.toLocaleLowerCase()}.com
                </p>
            </div>
        </Link>
    )
}

export default Business