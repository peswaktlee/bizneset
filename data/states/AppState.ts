import type { AppStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ENV_MODE,ENV_MODES, STATES } from '@/data/constants'

const AppState = create(
    devtools<AppStateInterface>(
        (set) => {
            const AppInitialState: AppStateInterface = {
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