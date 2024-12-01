import type { 
    RequestFunctionProps, 
    RequestFunctionReturnProps, 
    RequestType 
} from '~/ts'

import { getAuth as Auth } from 'firebase/auth'
import { DecodeRequest, EncodeRequest } from '~/helpers/http'

import { 
    SERVER_URL, 
    ENV_MODE, 
    ENV_MODES, 
    API_VERSIONS, 
    LANGUAGES 
} from '~/constants'

const Request = async (props: RequestFunctionProps): Promise<RequestFunctionReturnProps> => {
    const {
        path, 
        method, 
        signal,
        body
    } = props

    const auth = Auth()
    const token = await auth.currentUser?.getIdToken() || ''

    const options: RequestType = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Language': LANGUAGES.ALBANIAN,
            'Api-Version': API_VERSIONS.V1,
            'Authorization': token
        }
    }

    if (signal) options['signal'] = signal
    
    if (body) options['body'] = JSON.stringify(ENV_MODE === ENV_MODES.PRODUCTION ? EncodeRequest(body) : body)
    else options['body'] = JSON.stringify({})

    const request = await fetch(`${SERVER_URL}/${path}`, options as RequestInit)
    const respone = await request.json()

    return DecodeRequest(respone) as RequestFunctionReturnProps
}

export default Request