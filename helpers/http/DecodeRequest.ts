import { UNIVERSE } from '@/data/constants'

const DecodeRequest = (encoded: string) => {
    if (typeof encoded === 'string') {
        const key = UNIVERSE
        const data = decodeURIComponent(encoded)

        let decoded = ''

        for (let i = 0; i < data.length; i++) {
            decoded += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length))
        }

        return JSON.parse(decoded)
    }

    else return encoded
}

export default DecodeRequest