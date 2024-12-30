import type { CountriesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    ENV_MODE,
    ENV_MODES, 
    STATES,
    DEFAULT_COUNTRIES_STATE
} from '@/data/constants'

const CountriesState = create(
    devtools<CountriesStateInterface>(
        (set) => {
            const CountriesInitialState: CountriesStateInterface = {
                ...DEFAULT_COUNTRIES_STATE,
                SetCountriesState: (payload: Partial<CountriesStateInterface>) => set((state: CountriesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return CountriesInitialState
        },
        {
            name: STATES.COUNTRIES,
            store: STATES.COUNTRIES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    ),
)

export default CountriesState