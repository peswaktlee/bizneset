import type { ChangeEvent, FC, ReactNode } from 'react'
import type { BusinessFormInterface } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { GalleryLogo, GalleryImages } from '@/ui/components/manage-business'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const Gallery: FC = (): ReactNode => {
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

    if (Tab === MANAGE_BUSINESS_TABS.GALLERY) return (
        <div className='p-4 bg-white shadow-sm rounded-xl'>
            <GalleryLogo />
            <GalleryImages />
        </div>
    )
}

export default Gallery