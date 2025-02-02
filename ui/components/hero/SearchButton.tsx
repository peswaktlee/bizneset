import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { SearchIcon } from '@/ui/icons'
import { BusinessesState } from '@/data/states'

const SearchButton: FC = (): ReactNode => {
    const { TempFilters, SetBusinessesState } = BusinessesState(
        useShallow(state => {
            return {
                TempFilters: state.TempFilters,
                SetBusinessesState: state.SetBusinessesState
            }
        })
    )

    const HandleSearch = () => {
        SetBusinessesState({
            Filters: { 
                ...TempFilters 
            }
        })
    }

    return (
        <div className='flex items-center h-full justify-center rounded-r-full p-1 pl-2'>
            <button onClick={HandleSearch} className='bg-[var(--primary-bg)] h-full flex gap-2 items-center rounded-full p-2 px-4 hover:bg-[var(--primary-bg-hover)] transition-bg duration-500 ease-in-out'>
                <SearchIcon className='text-white w-[20px] h-[20px]' />

                <p className='font-medium text-md text-white'>
                    {Translation('search')}
                </p>
            </button>
        </div>
    )
}

export default SearchButton