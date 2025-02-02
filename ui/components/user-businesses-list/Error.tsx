import type { FC, ReactNode } from 'react'

import { UserBusinessesState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BugIcon } from '@/ui/icons'

const Error: FC = (): ReactNode => {
    const { Error: UserBusinessesError } = UserBusinessesState(
        useShallow(state => {
            return {
                Error: state.Error
            }
        })
    )

    if (UserBusinessesError) return (
        <div className='w-full h-auto px-4 py-64 place-content-center flex justify-center flex-col items-center align-middle'>
            <BugIcon className='w-10 h-10 mb-2' />

            <h1 className='mt-3 text-xl font-bold mb-1 tracking-tight text-black'>
                {Translation('your-businesses-error-title')}
            </h1>

            <p className='text-gray-700 text-[14.5px] text-md mt-2 w-[60%] text-center'>
                {Translation('your-businesses-error-description')}
            </p>
        </div>
    )
}

export default Error