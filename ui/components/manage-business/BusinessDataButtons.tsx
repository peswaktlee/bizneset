import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Button } from '@/ui/views'
import { BusinessesFormState } from '@/data/states'
import { LoadingIcon, SuccessIcon } from '@/ui/icons'
import { SubmitBusiness } from '@/actions/businesses'
import { DISABLED_STYLES } from '@/data/constants'

const BusinessDataButtons: FC = (): ReactNode => {
    const { push } = useRouter()

    const { 
        Creating,
        Loading,
        Updating
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Creating: state.Creating,
                Loading: state.Loading,
                Updating: state.Updating
            }
        })
    )

    return (
        <div className='flex justify-end mt-4'>
            <Button
                onClick={() => SubmitBusiness(push)}
                disabled={Creating || Loading || Updating }
                style={Creating || Loading || Updating ? DISABLED_STYLES : {}}
            >
                {Creating && <LoadingIcon className='w-5 h-5' />}
                {!Creating && <SuccessIcon strokeWidth={2} className='w-5 h-5' />}

                {Translation('submit-for-review')}
            </Button>
        </div>
    )
}

export default BusinessDataButtons