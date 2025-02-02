import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { XIcon } from '@/ui/icons'
import { ImageOnDrag } from '@/helpers/events'
import { Translation } from '@/helpers/generals'
import { DISABLED_STYLES } from '@/data/constants'

const LogoUploaded: FC = (): ReactNode => {
    const { 
        Form,
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

    const HandleRemoveLogo = () => {
        if (Form && FormErrors) {
            const form = JSON.parse(JSON.stringify(Form))
            const formErrors = FormErrors
            const isDisabled = Loading || Updating || Creating

            if (form && formErrors && !isDisabled) {
                form.Logo = null
                formErrors.Logo = false

                SetBusinessFormState({
                    Form: { ...form },
                    FormErrors: { ...formErrors }
                })
            }
        }
        
    }

    const sizeInBytes = Form?.Logo?.Size
    const sizeInMB = sizeInBytes ? (sizeInBytes / (1024 * 1024)).toFixed(2) : 0

    if (Form?.Logo?.Media) return (
        <div className={`flex w-64 flex-col relative items-center justify-center h-32 max-h-32 border-gray-200 border rounded-lg bg-gray-50 ${Loading || Updating || Creating ? 'cursor-default' : 'cursor-pointer'}`}>
            <button 
                disabled={Loading || Updating || Creating}
                style={Loading || Updating || Creating ? DISABLED_STYLES : {}}
                onClick={HandleRemoveLogo} 
                className='absolute h-6 w-6 flex items-center justify-center top-2 right-2 bg-gray-100 rounded-md border border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-200 z-10'
            >
                <XIcon className='w-4 text-gray-600' />
            </button>

            <img
                src={URL.createObjectURL(Form.Logo?.Media)}
                alt='logo'
                className='w-full h-full rounded-lg object-cover absolute top-0 right-0 left-0 bottom-0'
                onDragStart={ImageOnDrag}
            />

            <div className='absolute flex items-center py-1 justify-center bottom-0 right-0 left-0 bg-gray-100 border-t border-gray-100'>
                <p className='text-[12px] text-gray-500'>
                    {Form?.Logo?.Filename ? Form?.Logo?.Filename?.length > 12 ? Form?.Logo?.Filename?.substring(0, 12) : Form?.Logo?.Filename?.length : Translation('untitled').toLocaleLowerCase()?.replace(' ', '-')}.{Form?.Logo?.Type?.split('/')[1]}

                    <span className='text-[12px] text-gray-400 ml-1'>
                        ({sizeInMB}MB)
                    </span>
                </p>
            </div>
        </div>
    )
}

export default LogoUploaded