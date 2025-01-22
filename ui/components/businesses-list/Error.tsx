import type { FC, ReactNode } from 'react'

import { BusinessesState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BugIcon } from '@/ui/icons'

const Error: FC = (): ReactNode => {
    const { Error: BusinessesError } = BusinessesState(
        useShallow(state => {
            return {
                Error: state.Error
            }
        })
    )

    if (BusinessesError) return (
        <div className='w-full h-auto px-4 py-32 place-content-center flex justify-center flex-col items-center align-middle'>
            <BugIcon className='w-10 h-10 mb-2' />

            <h1 className='mt-3 text-xl font-bold mb-1 tracking-tight text-black'>
                {Translation('businesses-error-title')}
            </h1>

            <p className='text-gray-700 text-[14.5px] text-md mt-2 w-[60%] text-center'>
                {Translation('businesses-error-description')}
            </p>
        </div>
    )
}

export default Error