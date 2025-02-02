import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { GalleryLogo, GalleryImages } from '@/ui/components/manage-business'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const Gallery: FC = (): ReactNode => {
    const { Tab } = BusinessesFormState(
        useShallow(state => {
            return {
                Tab: state.Tab
            }
        })
    )

    if (Tab === MANAGE_BUSINESS_TABS.GALLERY) return (
        <div className='p-4 bg-white shadow-sm rounded-xl'>
            <GalleryLogo />
            <GalleryImages />
        </div>
    )
}

export default Gallery