import type { ChangeEvent, FC, ReactNode } from 'react'
import type { BusinessFormInterface } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Input } from '@/ui/views'
import { BusinessesFormState } from '@/data/states'
import { StringValidation } from '@/helpers/validations'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const BusinessData: FC = (): ReactNode => {
    const { 
        Form, 
        Tab,
        FormErrors,
        Updating,
        Loading,
        Creating,
        SetBusinessFormState
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                Tab: state.Tab,
                FormErrors: state.FormErrors,
                Updating: state.Updating,
                Loading: state.Loading,
                Creating: state.Creating,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    const HandleInputs = (e: ChangeEvent<HTMLInputElement> | string, target: keyof BusinessFormInterface) => {
        if (Form && FormErrors && !Loading && !Updating && !Creating) {
            const newValue = typeof e === 'string' ? e : e.target.value

            console.log('newValue', newValue)

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

    if (Tab === MANAGE_BUSINESS_TABS.GENERAL_DATA) return (
        <div className='p-4 bg-white shadow-sm rounded-xl'>
            <div className='w-64'>
                <Input
                    id='title'
                    label={Translation('title')}
                    placeholder={Translation('title')}
                    required={true}
                    value={Form?.Title || ''}
                    showError={FormErrors?.Title || false}
                    disabled={Updating || Loading || Creating}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Title')}
                    isError={StringValidation({
                        value: Form?.Title || '',
                        min: 2,
                        max: 99,
                        noNumbers: true,
                        noSpecialCharacters: true,
                        entityTranslation: 'title'
                    })}
                />

                <Input
                    id='description'
                    label={Translation('description')}
                    placeholder={Translation('description')}
                    required={true}
                    value={Form?.Description || ''}
                    showError={FormErrors?.Description || false}
                    disabled={Updating || Loading || Creating}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Description')}
                    isError={StringValidation({
                        value: Form?.Description || '',
                        min: 2,
                        max: 99,
                        noNumbers: true,
                        noSpecialCharacters: true,
                        entityTranslation: 'description'
                    })}
                />
            </div>
        </div>
    )
}

export default BusinessData