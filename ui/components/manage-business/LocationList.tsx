import type { ChangeEvent, FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox, Input } from '@/ui/views'
import { StringValidation, EmailValidation } from '@/helpers/validations'
import { BusinessesFormState } from '@/data/states'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const LocationList: FC = (): ReactNode => {
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

    if (Tab === MANAGE_BUSINESS_TABS.LOCATIONS && Form && Form?.Locations?.length > 0) return (
        <div>
            <p>
                {Translation('locations')}
            </p>

            <div className='bg-gray-50 p-4 rounded-md mb-4'>
                {
                    // @ts-ignore
                    Form?.Locations?.map((location, index) => {
                        return (
                            <div key={index}>
                                location
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LocationList