import type { SimilarBusinessesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_SIMILAR_BUSINESSES_STATE,
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const SimilarBusinessesState = create(
    devtools<SimilarBusinessesStateInterface>(
        (set) => {
            const SimilarBusinessesInitialState: SimilarBusinessesStateInterface = {
                Businesses: DEFAULT_SIMILAR_BUSINESSES_STATE.Businesses,
                Loading: DEFAULT_SIMILAR_BUSINESSES_STATE.Loading,
                Error: DEFAULT_SIMILAR_BUSINESSES_STATE.Error,
                SetSimilarBusinessesState: (payload: Partial<SimilarBusinessesStateInterface>) => set((state: SimilarBusinessesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return SimilarBusinessesInitialState
        },
        {
            name: STATES.USER_BUSINESSES,
            store: STATES.USER_BUSINESSES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default SimilarBusinessesState