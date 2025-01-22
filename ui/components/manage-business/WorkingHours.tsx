import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox } from '@/ui/views'
import { BusinessesFormState } from '@/data/states'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const WorkingHours: FC = (): ReactNode => {
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

    if (Tab === MANAGE_BUSINESS_TABS.LOCATIONS) return (
        <div>
            <p>
                {Translation('working-hours')}
            </p>

            <div className='bg-gray-50 p-4 rounded-md'>
                <div>
                    <p>
                        {Translation('monday')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkingHours