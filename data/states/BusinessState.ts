import type { BusinessStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_BUSINESS_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const BusinessesState = create(
    devtools<BusinessStateInterface>(
        (set) => {
            const BusinessInitialState: BusinessStateInterface = {
                Business: DEFAULT_BUSINESS_STATE.Business,
                Loading: DEFAULT_BUSINESS_STATE.Loading,
                Error: DEFAULT_BUSINESS_STATE.Error,
                SetBusinessState: (payload: Partial<BusinessStateInterface>) => set((state: BusinessStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return BusinessInitialState
        },
        {
            name: STATES.BUSINESS,
            store: STATES.BUSINESS,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default BusinessesState