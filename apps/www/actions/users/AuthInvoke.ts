import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { RequestPro } from '~/helpers/http'
import { Translation } from '~/helpers/generals'
import { NotificationState, AuthState } from '@/states'
import { UserLogout } from '@/actions/users'
import { FirebaseAuth } from '@/services/Firebase'
import { ENDPOINTS, METHODS } from '~/constants'

const AuthInvoke = async (push: Function) => {
    const { User, SmallLoading, SetAuthState } = AuthState.getState()
    const { Notification } = NotificationState.getState()

    if (!SmallLoading && !User) {
        try {
            SetAuthState({ SmallLoading: true })
    
            const FirebaseProvider = new GoogleAuthProvider()
    
            const result = await signInWithPopup(FirebaseAuth, FirebaseProvider)
            const user: any = result.user
    
            if (user) {
                const response = await RequestPro({
                    method: METHODS.POST,
                    path: ENDPOINTS.USERS.AUTH,
                    body: {
                        name: user.displayName,
                        email: user.email,
                        avatar: user.photoURL
                    }
                })
    
                if (response) {
                    const { 
                        success, 
                        data, 
                        code,
                        message 
                    } = response
    
                    if (success) SetAuthState({
                        User: data,
                        SmallLoading: false,
                        Loading: false
                    })
            
                    else {
                        Notification(message)

                        await UserLogout()

                        if (code !== 401) push('/')
                        else SetAuthState({ SmallLoading: false })
                    }
                }

                else {
                    await UserLogout()
                    push('/')
                }
            } 
            
            else {
                await UserLogout()
                push('/')
            }
        } 
        
        catch (error: unknown) {
            // @ts-ignore
            const message = error?.message || error
            
            if (!message.includes('popup-closed-by-user')) Notification(Translation('something-went-wrong-while-trying-to-authenticate-user'))
            
            await UserLogout()

            push('/')
        } 
    }
}

export default AuthInvoke