import { UNIVERSE } from '@/data/constants'

const EncodeRequest = (data: object) => {
    const key = UNIVERSE
    const data_stringified = JSON.stringify(data)

    let encoded = ''

    for (let i = 0; i < data_stringified.length; i++) {
        encoded += String.fromCharCode(data_stringified.charCodeAt(i) ^ key.charCodeAt(i % key.length))
    }

    return encodeURIComponent(encoded)
}

export default EncodeRequest