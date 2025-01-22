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
                Tab: DEFAULT_BUSINESS_FORM_STATE.Tab,
                FormErrors: DEFAULT_BUSINESS_FORM_STATE.FormErrors,
                Mode: DEFAULT_BUSINESS_FORM_STATE.Mode,
                Error: DEFAULT_BUSINESS_FORM_STATE.Error,
                Loading: DEFAULT_BUSINESS_FORM_STATE.Loading,
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