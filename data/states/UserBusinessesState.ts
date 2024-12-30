import type { UserBusinessesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_USER_BUSINESSES_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const UserBusinessesState = create(
    devtools<UserBusinessesStateInterface>(
        (set) => {
            const UserBusinessesInitialState: UserBusinessesStateInterface = {
                UserBusinesses: DEFAULT_USER_BUSINESSES_STATE.UserBusinesses,
                Loading: DEFAULT_USER_BUSINESSES_STATE.Loading,
                Error: DEFAULT_USER_BUSINESSES_STATE.Error,
                Reference: DEFAULT_USER_BUSINESSES_STATE.Reference,
                HasMore: DEFAULT_USER_BUSINESSES_STATE.HasMore,
                SetUserBusinessesState: (payload: Partial<UserBusinessesStateInterface>) => set((state: UserBusinessesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return UserBusinessesInitialState
        },
        {
            name: STATES.USER_BUSINESSES,
            store: STATES.USER_BUSINESSES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default UserBusinessesState