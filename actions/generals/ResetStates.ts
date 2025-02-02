import { ScrollTop } from '@/helpers/generals'

import { 
    AppState, 
    AuthState, 
    BusinessesState, 
    BusinessState,
    ConfirmationState,
    SimilarBusinessesState,
    UserBusinessesState,
    UserSavesState
} from '@/data/states'

import { 
    DEFAULT_APP_STATE, 
    DEFAULT_AUTH_STATE, 
    DEFAULT_BUSINESSES_STATE,
    DEFAULT_CONFIRMATION_STATE,
    DEFAULT_SIMILAR_BUSINESSES_STATE,
    DEFAULT_USER_BUSINESSES_STATE
} from '@/data/constants'

const ResetStates = (resetAuth: boolean) => {
    setTimeout(() => {
        ScrollTop()

        const { SetAuthState } = AuthState.getState()
        const { SetAppState } = AppState.getState()
        const { SetBusinessesState } = BusinessesState.getState()
        const { SetBusinessState } = BusinessState.getState()
        const { SetConfirmationState } = ConfirmationState.getState()
        const { SetSimilarBusinessesState } = SimilarBusinessesState.getState()
        const { SetUserBusinessesState } = UserBusinessesState.getState()
        const { SetUserSavesState } = UserSavesState.getState()

        if (resetAuth) SetAuthState({ 
            ...DEFAULT_AUTH_STATE,
            Loading: false,
            User: false,
            SmallLoading: false
        })

        SetAppState(DEFAULT_APP_STATE)
        SetBusinessState(DEFAULT_BUSINESSES_STATE)
        SetBusinessesState(DEFAULT_BUSINESSES_STATE)
        SetConfirmationState(DEFAULT_CONFIRMATION_STATE)
        SetSimilarBusinessesState(DEFAULT_SIMILAR_BUSINESSES_STATE)
        SetUserBusinessesState(DEFAULT_USER_BUSINESSES_STATE)
        SetUserSavesState(DEFAULT_USER_BUSINESSES_STATE)
    }, 1000)
}

export default ResetStates