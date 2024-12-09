import type { BusinessesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_BUSINESSES_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const BusinessesState = create(
    devtools<BusinessesStateInterface>(
        (set) => {
            const BusinessesInitialState: BusinessesStateInterface = {
                Businesses: DEFAULT_BUSINESSES_STATE.Businesses,
                Filters: DEFAULT_BUSINESSES_STATE.Filters,
                Loading: DEFAULT_BUSINESSES_STATE.Loading,
                Error: DEFAULT_BUSINESSES_STATE.Error,
                Reference: DEFAULT_BUSINESSES_STATE.Reference,
                HasMore: DEFAULT_BUSINESSES_STATE.HasMore,
                SetBusinessesState: (payload: Partial<BusinessesStateInterface>) => set((state: BusinessesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return BusinessesInitialState
        },
        {
            name: STATES.BUSINESSES,
            store: STATES.BUSINESSES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default BusinessesState