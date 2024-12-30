import type { BusinessInterface } from '@/ts'
import type { FC, ReactNode } from 'react'

import { LocationIcon } from '@/ui/icons'

const Info: FC<BusinessInterface> = (props): ReactNode => {
    const { Name, Address } = props

    return (
        <div className='flex flex-row justify-between items-center w-full mt-2'>
            <div className='flex flex-col'>
                <h3 className='text-md font-semibold text-black'>
                    {Name}
                </h3>

                <div className='flex items-center gap-1 mt-1 -ml-0.5'>
                    <LocationIcon className='w-4 h-4 text-gray-600' />

                    <p className='text-[13px] text-gray-600'>
                        {Address}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info