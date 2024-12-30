import type { CitiesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    ENV_MODE,
    ENV_MODES, 
    STATES,
    DEFAULT_CITIES_STATE
} from '@/data/constants'

const CitiesState = create(
    devtools<CitiesStateInterface>(
        (set) => {
            const CitiesInitialState: CitiesStateInterface = {
                ...DEFAULT_CITIES_STATE,
                SetCitiesState: (payload: Partial<CitiesStateInterface>) => set((state: CitiesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return CitiesInitialState
        },
        {
            name: STATES.CITIES,
            store: STATES.CITIES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    ),
)

export default CitiesState