import type { FC, ReactNode } from 'react'

import { Label } from '@/ui/components/generals'
import { Translation } from '@/helpers/generals'
import { UploadIcon } from '@/ui/icons'

const GalleryLogo: FC = (): ReactNode => {
    return (
        <div className='mb-8'>
            <Label label={Translation('logo')} required />

            <div className='flex items-center justify-start w-full'>
                <label htmlFor='dropzone-file' className='flex w-64 flex-col items-center justify-center h-46 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transitiona-all ease-in-out'>
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <UploadIcon className='w-7 h-7 mb-4 text-gray-500' />

                        <p className='mb-2 text-sm text-gray-500'>
                            <span className='font-semibold'>
                                {Translation('click-to-upload')}
                            </span> 
                        </p>

                        <p className='text-xs text-gray-500'>
                            PNG or JPG (200x200) MAX. 240mb
                        </p>
                    </div>
                    
                    <input id='dropzone-file' type='file' className='hidden' />
                </label>
            </div> 
        </div>
    )
}

export default GalleryLogo