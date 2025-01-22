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
                AuthModal: DEFAULT_AUTH_STATE.AuthModal,
                UpdatingUser: DEFAULT_AUTH_STATE.UpdatingUser,
                ClosingAccount: DEFAULT_AUTH_STATE.ClosingAccount,
                Error: DEFAULT_AUTH_STATE.Error,
                SmallLoading: DEFAULT_AUTH_STATE.SmallLoading,
                UserModal: DEFAULT_AUTH_STATE.UserModal,
                UserForm: DEFAULT_AUTH_STATE.UserForm,
                UserFormErrors: DEFAULT_AUTH_STATE.UserFormErrors,
                SetAuthState: (payload: Partial<AuthStateInterface>) => set((state: AuthStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return UserInitialState
        },
        {
            name: STATES.AUTH,
            store: STATES.AUTH,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default AuthState