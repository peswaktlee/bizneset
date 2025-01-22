import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'

const SelectLocation: FC = (): ReactNode => {
    const { 
        Form, 
        Tab,
        FormErrors,
        SetBusinessFormState
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                Tab: state.Tab,
                FormErrors: state.FormErrors,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )
   
    return (
        <div className='mt-6'>
        </div>
    )
}

export default SelectLocation