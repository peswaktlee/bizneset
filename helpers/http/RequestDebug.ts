import type { RequestProFunctionProps, RequestType } from '@/ts'

import { EncodeRequest } from '@/helpers/http'

import { 
    SERVER_URL, 
    ENV_MODE, 
    ENV_MODES, 
    API_VERSIONS, 
    LANGUAGES 
} from '@/data/constants'

const RequestDebug = async (props: RequestProFunctionProps): Promise<void> => {
    try {
        const {
            path, 
            method, 
            body
        } = props
    
        const options: RequestType = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Language': LANGUAGES.ALBANIAN,
                'Api-Version': API_VERSIONS.V1
            }
        }
    
        if (body) options['body'] = JSON.stringify(ENV_MODE === ENV_MODES.PRODUCTION ? EncodeRequest(body) : body)
        else options['body'] = JSON.stringify({})
    
        try {
            await fetch(`${SERVER_URL}/${path}`, options as RequestInit)
        }

        catch (error) {}
    }

    catch (error) {}
}

export default RequestDebug