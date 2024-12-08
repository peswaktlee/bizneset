import type { AuthStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_AUTH_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const AuthState = create(
    devtools<AuthStateInterface>(
        (set) => {
            const UserInitialState: AuthStateInterface = {
                User: DEFAULT_AUTH_STATE.User,
                Loading: DEFAULT_AUTH_STATE.Loading,
                Error: DEFAULT_AUTH_STATE.Error,
                SmallLoading: DEFAULT_AUTH_STATE.SmallLoading,
                UserModal: DEFAULT_AUTH_STATE.UserModal,
                SetAuthState: (payload: Partial<AuthStateInterface>) => set((state: AuthStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return UserInitialState
        },
        {
            name: STATES.USER,
            store: STATES.USER,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default AuthState