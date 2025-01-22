import type { AppStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_APP_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const AppState = create(
    devtools<AppStateInterface>(
        (set) => {
            const AppInitialState: AppStateInterface = {
                FixedHeader: DEFAULT_APP_STATE.FixedHeader,
                ScrollPosition: DEFAULT_APP_STATE.ScrollPosition,
                SetAppState: (payload: Partial<AppStateInterface>) => set((state: AppStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return AppInitialState
        },
        {
            name: STATES.APP,
            store: STATES.APP,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default AppState