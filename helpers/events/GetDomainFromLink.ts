import { CDN_ASSETS } from '@/data/constants'

const GetDomainFromLink = (url: string): string => {
    let domain

    if (!url) return CDN_ASSETS.WORLD_ICON

    else {
        if (url?.indexOf('://') > -1) domain = url?.split('/')[2]
        else domain = url?.split('/')[0]

        domain = domain?.split(':')[0]
        domain = domain?.split('/')[0]

        return `https://${domain}/favicon.ico` || CDN_ASSETS.WORLD_ICON
    }
}

export default GetDomainFromLink