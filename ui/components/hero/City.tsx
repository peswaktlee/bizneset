import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { BusinessesState } from '@/data/states'

const City: FC = (): ReactNode => {
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
                City: value
            }
        })
    }

    return (
        <div className='p-1'>
            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                {Translation('city')}
            </p>

            <input
                placeholder={Translation('select-city')}
                value={Filters?.City || ''}
                onChange={HandleChange}
                className='text-[15px] text-black font-normal mt-1 ml-1 bg-transparent'
            />
        </div>
    )
}

export default City