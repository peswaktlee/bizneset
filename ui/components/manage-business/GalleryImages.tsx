import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { Label } from '@/ui/components/generals'
import { UploadIcon } from '@/ui/icons'

const GalleryImages: FC = (): ReactNode => {
    return (
        <div>
            <Label label={Translation('gallery')} required />

            <div className='grid grid-cols-4 gap-2 items-start justify-start w-full'>
                {
                    Array.from({ length: 8 }).map((_, index) => {
                        return (
                            <div key={index} className='flex items-center justify-start'>
                                <label htmlFor='dropzone-file' className='flex w-full flex-col items-center justify-center h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                        <UploadIcon className='w-7 h-7 mb-4 text-gray-500' />

                                        <p className='mb-2 text-sm text-gray-500'>
                                            <span className='font-semibold'>
                                                {Translation('click-to-upload')}
                                            </span> 
                                        </p>

                                        <p className='text-xs text-gray-500'>
                                            PNG, JPG or GIF (MAX. 240)
                                        </p>
                                    </div>
                                    
                                    <input id='dropzone-file' type='file' className='hidden' />
                                </label>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}


export default GalleryImages