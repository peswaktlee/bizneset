import { AuthState } from '@/states'
import { ScrollTop } from '~/helpers/generals'
import { DEFAULT_AUTH_STATE } from '~/constants'

const ResetStates = (resetAuth: boolean = false) => {
    ScrollTop()

    const { SetAuthState } = AuthState.getState()

    if (resetAuth) SetAuthState({ 
        ...DEFAULT_AUTH_STATE,
        Loading: false
    })

    else SetAuthState({ ...DEFAULT_AUTH_STATE })
}

export default ResetStates