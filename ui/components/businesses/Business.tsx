import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Link, PATHS } from '@/data/constants'

const Business: FC<BusinessInterface> = (props): ReactNode => {
    const { Name, Slug } = props

    return (
        <Link 
            href={`/${PATHS.BUSINESSES}/${Slug}`} 
            className='hover:cursor-pointer relative flex flex-col items-center justify-center gap-2 hover:opacity-80 transition-all duration-500'
        >
            <img
                src='https://via.placeholder.com/150'
                alt={Name}
                className='rounded-lg w-full h-64 object-cover'
            />

            <div className='flex flex-col justify-start items-start w-full'>
                <h3 className='text-md font-semibold text-gray-800'>
                    {Name}
                </h3>

                <p className='text-sm'>
                    https//{Name.toLocaleLowerCase()}.com
                </p>
            </div>
        </Link>
    )
}

export default Business