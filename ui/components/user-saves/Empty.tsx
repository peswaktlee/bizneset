import type { FC, ReactNode } from 'react'

import { UserSavesState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BookmarkIcon } from '@/ui/icons'

const Empty: FC = (): ReactNode => {
    const { 
        Error, 
        Loading, 
        UserSaves 
    } = UserSavesState(
        useShallow(state => {
            return {
                Error: state.Error,
                Loading: state.Loading,
                UserSaves: state.UserSaves
            }
        })
    )

    if (!Error && !Loading && UserSaves.length === 0) return (
        <div className='w-full h-auto px-4 py-32 place-content-center flex justify-center flex-col items-center align-middle'>
            <BookmarkIcon className='w-10 h-10 mb-2' />
            
            <h1 className='mt-3 text-xl font-bold mb-1 tracking-tight text-black'>
                {Translation('your-saved-businesses-empty-title')}
            </h1>

            <p className='text-gray-700 text-[14.5px] text-md mt-2 w-[60%] text-center'>
                {Translation('your-saved-businesses-empty-description')}
            </p>
        </div>
    )
}

export default Empty