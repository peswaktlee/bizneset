import { type TranslationKeys } from '~/ts'

import { sq_AL } from '~/langs'
import { INVALID_TRANSLATION_KEY } from '~/constants/Codes'

export const Translation = (key: TranslationKeys | Array<TranslationKeys>): string => {
    if (key instanceof Array) return key.map(k => Translation(k) || INVALID_TRANSLATION_KEY).join(' ')
    else return sq_AL[key] || INVALID_TRANSLATION_KEY
}

export default Translation
