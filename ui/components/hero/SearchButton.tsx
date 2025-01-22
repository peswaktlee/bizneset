import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { SearchIcon } from '@/ui/icons'

const City: FC = (): ReactNode => {
    return (
        <div className='flex items-center h-full justify-center rounded-r-full p-1'>
            <button className='bg-[var(--primary-bg)] h-full flex gap-2 items-center rounded-full p-2 px-4 hover:bg-[var(--primary-bg-hover)] transition-bg duration-300 ease-in-out'>
                <SearchIcon className='text-white w-[20px] h-[20px]' />

                <p className='font-medium text-md text-white'>
                    {Translation('search')}
                </p>
            </button>
        </div>
    )
}

export default City