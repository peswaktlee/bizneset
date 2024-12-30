import type { BusinessFormStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_BUSINESS_FORM_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const BusinessesFormState = create(
    devtools<BusinessFormStateInterface>(
        (set) => {
            const BusinessInitialState: BusinessFormStateInterface = {
                Form: DEFAULT_BUSINESS_FORM_STATE.Form,
                Mode: DEFAULT_BUSINESS_FORM_STATE.Mode,
                Loading: DEFAULT_BUSINESS_FORM_STATE.Loading,
                Error: DEFAULT_BUSINESS_FORM_STATE.Error,
                NotFound: DEFAULT_BUSINESS_FORM_STATE.NotFound,
                Creating: DEFAULT_BUSINESS_FORM_STATE.Creating,
                Updating: DEFAULT_BUSINESS_FORM_STATE.Updating,
                SetBusinessFormState: (payload: Partial<BusinessFormStateInterface>) => set((state: BusinessFormStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return BusinessInitialState
        },
        {
            name: STATES.BUSINESS_FORM,
            store: STATES.BUSINESS_FORM,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default BusinessesFormState