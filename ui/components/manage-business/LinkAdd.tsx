import type { ChangeEvent, FC, ReactNode } from 'react'
import type { BusinessFormInterface } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { LinkWebsiteIcon } from '@/ui/components/manage-business'
import { Input } from '@/ui/views'
import { Translation } from '@/helpers/generals'
import { WebsiteValidation } from '@/helpers/validations'
import { AddIcon } from '@/ui/icons'
import { MANAGE_BUSINESS_TABS, MAX_LINKS } from '@/data/constants'

const LinkAdd: FC = (): ReactNode => {
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

    if (Tab === MANAGE_BUSINESS_TABS.LINKS && Form && Form?.Links?.length < MAX_LINKS && Form?.Links?.length > 0) return (
        <section className='flex flex-row items-center'>
            <div className='flex items-start' >
                <LinkWebsiteIcon link={Form?.Link} />

                <Input
                    id='phone'
                    placeholder={Translation('link')}
                    required={true}
                    value={Form?.Link || ''}
                    showError={FormErrors?.Link || false}
                    disabled={Form ? false : true || (Form?.Links.length ?? 0) >= MAX_LINKS || Loading || Updating || Creating}
                    isError={WebsiteValidation(Form?.Address?.Phone)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Link')}
                    // onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    //     LinkAddHandler({
                    //         event: e, 
                    //         link, 
                    //         onInput, 
                    //         links, 
                    //         onChange, 
                    //         Notification, 
                    //         isError
                    //     })
                    // }}
                />
            </div>

            <div className='flex h-full bg-gray-50 justify-center items-center cursor-pointer transition-all ease-in-out duration-500 rounded-full hover:bg-[var(--accent-opacity-hover)]'>
                <AddIcon />
            </div>
        </section>
    )
}

export default LinkAdd