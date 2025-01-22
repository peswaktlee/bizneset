import type { FooterSocialMediaLinksType } from '@/ts'

import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '@/ui/icons'
import { SOCIAL_MEDIA_LINKS } from '@/data/constants'

const FooterSocialMediaLinks = (): Array<FooterSocialMediaLinksType> => {
    let links: Array<FooterSocialMediaLinksType> = [
        {
            href: SOCIAL_MEDIA_LINKS.FACEBOOK,
            icon: FacebookIcon,
            name: 'facebook',
            show: true
        },
        {
            href: SOCIAL_MEDIA_LINKS.YOUTUBE,
            icon: YouTubeIcon,
            name: 'youtube',
            show: true
        },
        {
            href: SOCIAL_MEDIA_LINKS.LINKEDIN,
            icon: LinkedInIcon,
            name: 'linkedin',
            show: true
        },
        {
            href: SOCIAL_MEDIA_LINKS.INSTAGRAM,
            icon: InstagramIcon,
            name: 'instagram',
            show: true
        }
    ]
    
    return links
}

export default FooterSocialMediaLinks