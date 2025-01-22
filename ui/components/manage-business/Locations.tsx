import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { LocationList, AddLocation, NoLocations } from '@/ui/components/manage-business'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const Locations: FC = (): ReactNode => {
    const { Tab } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                Tab: state.Tab,
                FormErrors: state.FormErrors,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    if (Tab === MANAGE_BUSINESS_TABS.LOCATIONS) return (
        <div>
            <LocationList />
            <NoLocations />
            <AddLocation />
        </div>
    )
}

export default Locations