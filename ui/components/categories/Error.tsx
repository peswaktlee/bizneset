import type { FC, ReactNode } from 'react'

import { CategoriesState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BugAntIcon } from '@heroicons/react/24/outline'

const Error: FC = (): ReactNode => {
    const { Error: CategoriesError } = CategoriesState(
        useShallow(state => {
            return {
                Error: state.Error
            }
        })
    )

    if (CategoriesError) return (
        <div className='w-full h-[60%] bg-white px-4 py-16 place-content-center flex justify-center flex-col items-center align-middle'>
            <BugAntIcon className='w-10 h-10 mb-2' />
            
            <h1 className='mt-2 text-xl font-bold mb-1 tracking-tight text-gray-700'>
                {Translation('categories-error-title')}
            </h1>

            <p className='text-gray-500 text-md text-[14px] w-[60%] text-center'>
                {Translation('categories-error-description')}
            </p>
        </div>
    )
}

export default Error