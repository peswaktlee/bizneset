import { type ConfirmationStateInterface } from '~/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_CONFIRMATION_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '~/constants'

const ConfirmationState = create(
    devtools<ConfirmationStateInterface>(
        (set) => {
            const ConfirmationInitialState: ConfirmationStateInterface = {
                Title: DEFAULT_CONFIRMATION_STATE.Title,
                Open: DEFAULT_CONFIRMATION_STATE.Open,
                onConfirm: () => {},
                SetConfirmationState: (payload: Partial<ConfirmationStateInterface>) => set((state: ConfirmationStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return ConfirmationInitialState
        },
        {
            name: STATES.CONFIRMATION,
            store: STATES.CONFIRMATION,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    ),
)

export default ConfirmationState