import type { FC, ReactNode } from 'react'

import { Label } from '@/ui/components/generals'
import { Translation } from '@/helpers/generals'
import { LogoUploaded, LogoNotUploaded } from '@/ui/components/manage-business'

const GalleryLogo: FC = (): ReactNode => {
    return (
        <div className='mb-8'>
            <Label label={Translation('logo')} required />

            <LogoUploaded />
            <LogoNotUploaded />
        </div>
    )
}

export default GalleryLogo