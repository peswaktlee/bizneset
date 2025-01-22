import type { ManageBusinessTabType } from '@/ts'

import { GalleryIcon, LinkIcon, LocationIcon, StoreIcon } from '@/ui/icons'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const ManageBusinessTabList: Array<ManageBusinessTabType> = [
    {
        title: 'base-information',
        slug: MANAGE_BUSINESS_TABS.GENERAL_DATA,
        icon: StoreIcon,
        disabled: false,
        active: true
    },
    {
        title: 'gallery',
        slug: MANAGE_BUSINESS_TABS.GALLERY,
        icon: GalleryIcon,
        disabled: false,
        active: false
    },
    {
        title: 'locations',
        slug: MANAGE_BUSINESS_TABS.LOCATIONS,
        icon: LocationIcon,
        disabled: false,
        active: false
    },
    {
        title: 'links',
        slug: MANAGE_BUSINESS_TABS.LINKS,
        icon: LinkIcon,
        disabled: false,
        active: false
    }
]

export default ManageBusinessTabList