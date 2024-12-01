import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { AuthStateHook, useAuthState } from 'react-firebase-hooks/auth'
import { RequestPro } from '~/helpers/http'
import { Translation, ScrollTop } from '~/helpers/generals'
import { NotificationState, AuthState } from '@/states'
import { FirebaseAuth } from '@/services/Firebase'
import { UserLogout } from '@/actions/users'
import { ENDPOINTS, METHODS } from '~/constants'

const useAuth = () => {
    const { User, SetAuthState } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                SetAuthState: state.SetAuthState
            }
        })
    )

    const { Notification } = NotificationState(
        useShallow(state => {
            return {
                Notification: state.Notification
            }
        })
    )

    const [allow, setAllow] = useState(true)
    const [user, loading] = useAuthState(FirebaseAuth) as AuthStateHook

    const Authenticator = async () => {
        if (user && user.email) {
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
                    Loading: false
                })
    
                else {
                    Notification(message)

                    await UserLogout()
                    if (code === 401) SetAuthState({ SmallLoading: false })
                }
            }
    
            else {
                await UserLogout()
                Notification(Translation('something-went-wrong-while-trying-to-authenticate-user'))
            }
        }

        else {
            await UserLogout()
            Notification(Translation('something-went-wrong-while-trying-to-authenticate-user'))
        }
    }

    useEffect(() => {
        if (!loading && allow) {
            if (!user && !User) {
                ScrollTop()

                FirebaseAuth.signOut()

                setAllow(false)

                SetAuthState({
                    Loading: false,
                    User: false
                })
            }

            if (user && !User) {
                setAllow(false)
                Authenticator()
            }
        }
    }, [user, loading])
}

export default useAuth