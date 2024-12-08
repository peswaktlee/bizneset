import { initializeApp, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { Translation } from '@/helpers/generals'
import { Console } from '@/helpers/debug'

import { 
    FB_API_KEY, 
    FB_APP_ID, 
    FB_AUTH_DOMAIN, 
    FB_MESSAGING_SENDER_ID, 
    FB_PROJECT_ID, 
    FB_STORAGE_BUCKET
} from '@/data/constants'

let Firebase: FirebaseApp
let FirebaseAuth: Auth
let GetAuth = getAuth

try {
    Firebase = initializeApp({
        apiKey: FB_API_KEY,
        authDomain: FB_AUTH_DOMAIN,
        projectId: FB_PROJECT_ID,
        storageBucket: FB_STORAGE_BUCKET,
        messagingSenderId: FB_MESSAGING_SENDER_ID,
        appId: FB_APP_ID
    })

    FirebaseAuth = getAuth(Firebase)
} 

catch (error: unknown) {
    // @ts-ignore
    if (!/already exists/.test(error?.message)) {
        Console.Error('Firebase', error)

        if (typeof window !== 'undefined') {
            document.body.innerHTML = `<h1>${Translation('application-error')}</h1>`
        }
    }
}

export {
    FirebaseAuth, 
    GetAuth 
}