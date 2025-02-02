import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { UploadIcon } from '@/ui/icons'
import { BusinessesFormState } from '@/data/states'
import { HandleLogoUpload } from '@/helpers/events'
import { FILE_TYPES, MAX_LOGO_SIZE_IN_MB } from '@/data/constants'

const LogoNotUploaded: FC = (): ReactNode => {
    const { Form } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form
            }
        })
    )

    if (!Form?.Logo?.Media) return (
        <div className='flex items-center justify-start w-full'>
            <label htmlFor='logo-zone' className='flex w-64 flex-col items-center justify-center h-46 border border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transitiona-all duration-500 ease-in-out'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <UploadIcon className='w-7 h-7 mb-4 text-gray-500' />

                    <p className='mb-2 text-sm text-gray-500'>
                        <span className='font-semibold'>
                            {Translation('click-to-upload')}
                        </span> 
                    </p>

                    <p className='text-xs text-gray-500'>
                        .{FILE_TYPES.IMAGE_PNG?.split('/')[1].toLocaleLowerCase()}, {Translation('or')} .{FILE_TYPES.IMAGE_WEBP?.split('/')[1].toLocaleLowerCase()} (200x200) MAX. ({MAX_LOGO_SIZE_IN_MB}MB)
                    </p>
                </div>
                
                <input 
                    id='logo-zone' 
                    type='file' 
                    accept={`${FILE_TYPES.IMAGE_PNG}, ${FILE_TYPES.IMAGE_WEBP}`}
                    className='hidden' 
                    onChange={HandleLogoUpload}
                />
            </label>
        </div> 
    )
}

export default LogoNotUploaded