import type { ChangeEvent, FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { LinkWebsiteIcon } from '@/ui/components/manage-business'
import { Input } from '@/ui/views'
import { Translation } from '@/helpers/generals'
import { WebsiteValidation } from '@/helpers/validations'
import { TrashIcon } from '@/ui/icons'
import { MANAGE_BUSINESS_TABS, MAX_LINKS } from '@/data/constants'

const LinkList: FC = (): ReactNode => {
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

    const HandleInputs = (e: ChangeEvent<HTMLInputElement> | string, index: number) => {
        if (Form && FormErrors && !Loading && !Updating && !Creating) {
            const newValue = typeof e === 'string' ? e : e.target.value
        
            const form = JSON.parse(JSON.stringify(Form))
            const formErros = FormErrors
        
            // @ts-ignore
            form.Links[index] = newValue
        
            // @ts-ignore
            formErros.Links[index] = true

            SetBusinessFormState({ 
                Form: {
                    ...form
                },
                FormErrors: {
                    ...formErros
                }
            })
        }
    }

    const HandleLinkRemove = (index: number) => {
        if (Form && FormErrors && !Loading && !Updating && !Creating) {
            const form = JSON.parse(JSON.stringify(Form))
            const formErrors = FormErrors

            const links = form.Links
            const linksErrors = formErrors.Links

            links?.splice(index, 1)
            linksErrors?.splice(index, 1)

            form.Links = links
            formErrors.Links = linksErrors

            SetBusinessFormState({
                Form: {
                    ...form
                },
                FormErrors: {
                    ...formErrors
                }
            })
        }
    }

    if (Tab === MANAGE_BUSINESS_TABS.LINKS && Form && Array.isArray(Form?.Links) && Form?.Links?.length > 0) return (
        <div className='gap-1.5 p-4 bg-white w-full flex flex-col rounded-xl text-sm justify-start flex-wrap'>
            {Form?.Links?.map((link: string, index: number) => {
                return (
                    <section className='flex flex-row items-center' key={link}>
                        <LinkWebsiteIcon link={Form?.Link} />

                        <Input
                            id='phone'
                            placeholder={Translation('link')}
                            required={true}
                            value={link}
                            showError={true}
                            disabled={Form ? false : true || (Form?.Links?.length ?? 0) >= MAX_LINKS || Loading || Updating || Creating}
                            isError={WebsiteValidation(link)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, index)}
                        />

                        <div onClick={() => HandleLinkRemove(index)} className='flex justify-center items-center cursor-pointer transition-all ease-in-out duration-500 rounded-full hover:bg-[var(--accent-opacity-hover)] w-[18px] h-[18px]'>
                            <TrashIcon />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export default LinkList