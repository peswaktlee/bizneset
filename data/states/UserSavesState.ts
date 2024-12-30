import type { UserSavesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_USER_SAVES_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const UserSavesState = create(
    devtools<UserSavesStateInterface>(
        (set) => {
            const UserSavesInitialState: UserSavesStateInterface = {
                UserSaves: DEFAULT_USER_SAVES_STATE.UserSaves,
                Loading: DEFAULT_USER_SAVES_STATE.Loading,
                Error: DEFAULT_USER_SAVES_STATE.Error,
                Reference: DEFAULT_USER_SAVES_STATE.Reference,
                HasMore: DEFAULT_USER_SAVES_STATE.HasMore,
                SetUserSavesState: (payload: Partial<UserSavesStateInterface>) => set((state: UserSavesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return UserSavesInitialState
        },
        {
            name: STATES.USER_SAVES,
            store: STATES.USER_SAVES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default UserSavesState