import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { AddIcon, LinkIcon, StoreIcon } from '@/ui/icons'
import { Button } from '@/ui/views'
import { BUTTON_TYPES } from '@/data/constants'

const NoLinks: FC = (): ReactNode => {
    const { 
        Form,
        FormErrors,
        Creating,
        Updating,
        Loading,
        SetBusinessFormState
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                FormErrors: state.FormErrors,
                Creating: state.Creating,
                Updating: state.Updating,
                Loading: state.Loading,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    const AddInitalLink = () => {
        if (!Updating && !Creating && !Loading && Form && FormErrors) {
            const form = JSON.parse(JSON.stringify(Form))

            const formErrors = FormErrors
            const links = form?.Links

            links?.push('')
            formErrors?.Links?.push(false)


            form.Links = links
            formErrors.Links = formErrors.Links

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

    console.log('Form', Form)

    if (Form?.Links?.length === 0) return (
        <div className='w-full h-auto px-4 py-24 place-content-center flex justify-center flex-col items-center align-middle bg-white'>
            <LinkIcon className='w-8 h-8 mb-2' />
            
            <h1 className='mt-3 text-lg font-bold mb-1 tracking-tight text-black'>
                {Translation('no-links-empty-title')}
            </h1>

            <p className='text-gray-700 text-[13.5px] mt-2 w-[60%] text-center'>
                {Translation('no-links-empty-description')}
            </p>

            <div className='mt-4'>
                <Button
                    type={BUTTON_TYPES.PRIMARY}
                    className={`text-[14px] gap-1.5 ${Updating || Creating || Loading ? 'opacity-50 cursor-not-allowed ' : ''}`}
                    onClick={AddInitalLink}
                    disabled={Updating || Creating || Loading}
                >
                    <AddIcon className='w-5 h-5' />
                    {Translation('add-first-link')}
                </Button>
            </div>
        </div>
    )
}

export default NoLinks