import type { 
    RequestProFunctionProps, 
    RequestFunctionReturnProps,
    RequestType 
} from '~/ts'

import { getAuth as Auth } from 'firebase/auth'
import { DecodeRequest, EncodeRequest } from '~/helpers/http'
import { Translation } from '~/helpers/generals'
import { Console } from '~/helpers/debug'

import { 
    SERVER_URL, 
    ENV_MODE, 
    ENV_MODES, 
    API_VERSIONS, 
    LANGUAGES 
} from '~/constants'

const RequestPro = async (props: RequestProFunctionProps): Promise<RequestFunctionReturnProps> => {
    let initalResponse = {
        success: false,
        message: Translation('something-went-wrong-while-trying-to-make-a-request'),
        data: null,
        code: 500,
    }

    try {
        const {
            path, 
            method, 
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
    
        if (body) options['body'] = JSON.stringify(ENV_MODE === ENV_MODES.PRODUCTION ? EncodeRequest(body) : body)
        else options['body'] = JSON.stringify({})
    
        try {
            const request = await fetch(`${SERVER_URL}/${path}`, options as RequestInit)
            const respone = await request.json()
        
            return DecodeRequest(respone) as RequestFunctionReturnProps
        }

        catch (error) {
            Console.Error('RequestProFetch', error)
            return initalResponse
        }
    }

    catch (error) {
        Console.Error('RequestPro', error)
        return initalResponse
    }
}

export default RequestPro