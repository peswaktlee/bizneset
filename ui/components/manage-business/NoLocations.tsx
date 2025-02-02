import type { FC, ReactNode } from 'react'

import { Translation } from '@/helpers/generals'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { AddIcon, LocationIcon, StoreIcon } from '@/ui/icons'
import { Button } from '@/ui/views'
import { BUTTON_TYPES, DISABLED_STYLES } from '@/data/constants'

const NoLocations: FC = (): ReactNode => {
    const { 
        Form,
        Updating,
        Creating,
        Loading,
        SetBusinessFormState
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                Updating: state.Updating,
                Creating: state.Creating,
                Loading: state.Loading,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    const AddInitialLocation = () => {
        if (Form) {
            const form = Form
            const locations = form.Locations

            form.Locations = locations

            SetBusinessFormState({ Form: form })
        }
    }

    if (Form?.Locations?.length === 0) return (
        <div className='w-full h-auto px-4 py-24 place-content-center flex justify-center flex-col items-center align-middle bg-white'>
            <StoreIcon className='w-8 h-8 mb-2' />
         
            <h1 className='mt-3 text-lg font-bold mb-1 tracking-tight text-black'>
                {Translation('no-locations-empty-title')}
            </h1>

            <p className='text-gray-700 text-[13.5px] mt-2 w-[60%] text-center'>
                {Translation('no-locations-empty-description')}
            </p>

            <div className='mt-4'>
                <Button
                    type={BUTTON_TYPES.PRIMARY}
                    className='text-[14px] gap-1.5'
                    onClick={AddInitialLocation}
                    disabled={Updating || Creating || Loading}
                    style={Updating || Creating || Loading ? DISABLED_STYLES : {}}
                >
                    <AddIcon className='w-5 h-5' />

                    {Translation('add-location-link')}
                </Button>
            </div>
        </div>
    )
}

export default NoLocations