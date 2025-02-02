import { CDN_BUCKETS, CDN_URL, FILE_EXTENSION } from '@/data/constants'

const BuildUserAvatarUrl = (userId: string | undefined) => {
    if (userId) {
        let url = CDN_URL

        url += `/${CDN_BUCKETS.AVATARS}`
        url += '/avatars'
        url += `/${userId}.${FILE_EXTENSION.WEBP}`

        return url
    }

    else return ''
}

export default BuildUserAvatarUrl