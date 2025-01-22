import { LinksValidationsTypes } from '@/ts'
import { LinkValidRegex } from '@/data/constants'

const LinkValidation = (link: string, links: Array<string>): LinksValidationsTypes=> {
    if (link === undefined || links === undefined) return {
        isUsed: false,
        isValidLink: false
    }

    else {
        const lowerCaseValue = link.toLowerCase().replace('https://', '').replace('http://', '').replace('www.', '')

        const formated_links = links?.map(link => link.toLowerCase().replace('https://', '').replace('http://', '').replace('www.', ''))
        const isUsed =  formated_links?.includes(lowerCaseValue)

        const isValidLink = LinkValidRegex.test(lowerCaseValue)

        return {
            isUsed,
            isValidLink
        }
    }
}

export default LinkValidation