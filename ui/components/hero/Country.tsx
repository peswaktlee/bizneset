import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BusinessesState } from '@/data/states'

const Country: FC = (): ReactNode => {
    const { Filters } = BusinessesState(
        useShallow(state => {
            return {
                Filters: state.Filters
            }
        })
    )

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        BusinessesState.setState({
            Filters: {
                ...Filters,
                Country: value
            }
        })
    }

    return (
        <div className='p-1'>
            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                {Translation('country')}
            </p>

            <input
                placeholder={Translation('select-country')}
                value={Filters?.Country || ''}
                onChange={HandleChange}
                className='text-[15px] text-black font-normal mt-1 ml-1 bg-transparent'
            />
        </div>
    )
}

export default Country