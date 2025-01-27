import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BusinessesState } from '@/data/states'
import { MAX_TERM_LENGTH } from '@/data/constants'

const Term: FC = (): ReactNode => {
    const { Filters } = BusinessesState(
        useShallow(state => {
            return {
                Filters: state.Filters
            }
        })
    )

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        const term = value.length > MAX_TERM_LENGTH ? value.slice(0, MAX_TERM_LENGTH) : value

        BusinessesState.setState({
            Filters: {
                ...Filters,
                Term: term
            }
        })
    }

    return (
        <div className='rounded-l-full p-1'>
            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                {Translation('find-business')}
            </p>

            <input 
                placeholder={Translation('search-business')}
                value={Filters?.Term || ''}
                onChange={HandleChange}
                max={MAX_TERM_LENGTH}
                type='text'
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                spellCheck='false'
                className='text-[15px] text-black font-normal mt-1 ml-1 bg-transparent placeholder:text-gray-400'
            />
        </div>
    )
}

export default Term