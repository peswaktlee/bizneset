import type { ChangeEvent, FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { useShallow } from 'zustand/react/shallow'
import { Input } from '@/ui/views'
import { StringValidation, EmailValidation } from '@/helpers/validations'
import { BusinessesFormState } from '@/data/states'
import { WorkingHours } from '@/ui/components/manage-business'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'
import { BusinessLocationInterface } from '@/ts'

const AddLocation: FC = (): ReactNode => {
    const { 
        Form, 
        FormErrors,
        Tab,
        Updating,
        Loading,
        Creating,
        SetBusinessFormState
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                FormErrors: state.FormErrors,
                Tab: state.Tab,
                Updating: state.Updating,
                Loading: state.Loading,
                Creating: state.Creating,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    const HandleInputs = (e: ChangeEvent<HTMLInputElement> | string, target: keyof BusinessLocationInterface) => {
        if (Form && FormErrors && !Loading && !Updating && !Creating) {
            const newValue = typeof e === 'string' ? e : e.target.value
    
            const form = Form 
            const formErros = FormErrors
    
            // @ts-ignore
            form[target] = newValue
    
            // @ts-ignore
            formErros[target] = true
    
            SetBusinessFormState({ 
                Form: form,
                FormErrors: formErros
            })
        }
    }

    if (Tab === MANAGE_BUSINESS_TABS.LOCATIONS && Form && Form?.Locations?.length > 0) return (
        <div>
            <p>
                {Translation('add-location')}
            </p>

            <div className='bg-gray-50 p-4 rounded-md'>
                <div>
                    <Input
                        id='name'
                        label={Translation('location-name')}
                        placeholder={Translation('location-name')}
                        required={false}
                        value={Form?.Address?.Name || ''}
                        showError={FormErrors?.Address?.Name || false}
                        disabled={Form ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Name')}
                        isError={StringValidation({
                            value: Form?.Address?.Name || '',
                            min: 2,
                            max: 99,
                            noNumbers: true,
                            noSpecialCharacters: true,
                            entityTranslation: 'name'
                        })}
                    />

                    <Input
                        id='address'
                        label={Translation('address')}
                        placeholder={Translation('address')}
                        required={true}
                        value={Form?.Address?.Address || ''}
                        showError={FormErrors?.Address?.Address || false}
                        disabled={Form ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Address')}
                        isError={StringValidation({
                            value: Form?.Address?.Address || '',
                            min: 2,
                            max: 99,
                            noNumbers: false,
                            noSpecialCharacters: false,
                            entityTranslation: 'address'
                        })}
                    />

                    <Input
                        id='phone'
                        label={Translation('phone')}
                        placeholder={Translation('phone')}
                        required={true}
                        value={Form?.Address?.Phone || ''}
                        showError={FormErrors?.Address?.Phone || false}
                        disabled={Form ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Phone')}
                        isError={StringValidation({
                            value: Form?.Address?.Website || '',
                            min: 2,
                            max: 99,
                            noNumbers: false,
                            noSpecialCharacters: false,
                            entityTranslation: 'phone'
                        })}
                    />

                    <Input
                        id='email'
                        label={Translation('email')}
                        placeholder={Translation('email')}
                        required={false}
                        value={Form?.Address?.Email || ''}
                        showError={FormErrors?.Address?.Email || false}
                        disabled={Form ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Email')}
                        isError={EmailValidation(Form?.Address?.Email)}
                    />

                    <Input
                        id='website'
                        label={Translation('website')}
                        placeholder={Translation('website')}
                        required={false}
                        value={Form?.Address?.Website || ''}                        
                        showError={FormErrors?.Address?.Website || false}
                        disabled={Form ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Website')}
                        isError={StringValidation({
                            value: Form?.Address?.Website || '',
                            min: 2,
                            max: 99,
                            noNumbers: false,
                            noSpecialCharacters: false,
                            entityTranslation: 'website'
                        })}
                    />

                    <WorkingHours />
                </div>

                <button>
                    {Translation('add-location')}
                </button>
            </div>
        </div>
    )
}

export default AddLocation