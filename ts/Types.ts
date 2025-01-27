import type { METHODS } from 'http'

import type { 
    CSSProperties, 
    ReactNode, 
    MouseEvent, 
    KeyboardEvent,
    FC, 
    SVGProps, 
    ChangeEvent, 
    Reference 
} from 'react'

import { sq_AL } from '@/data/langs'
import { USER_ROLES, NOTIFICATION_TYPES, BUTTON_TYPES, MANAGE_BUSINESS_TABS } from '@/data/constants'

export type TranslationKeys = keyof typeof sq_AL
export type TranslationTypes = typeof sq_AL

export type UserRoleTypes = (typeof USER_ROLES)[keyof typeof USER_ROLES]
export type HttpMethodTypes = (typeof METHODS)[keyof typeof METHODS]
export type NotificationTypes = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES]
export type ButtonTypes = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES]
export type ManageBusinessTabTypes = (typeof MANAGE_BUSINESS_TABS)[keyof typeof MANAGE_BUSINESS_TABS]

export type RouterPathFunctionType = (path: string) => void

export type NotificationInterface = {
    Id: number
    Title: string
    Count: number,
    Type: NotificationTypes
}

export type RequestFunctionProps = {
    path: string
    method: HttpMethodTypes
    signal?: AbortSignal
    body?: Record<string, unknown>
}

export type RequestType = {
    method: HttpMethodTypes,
    headers: Record<string, string>
    body?: string
    signal?: AbortSignal
}

export type RequestProFunctionProps = {
    path: string
    method: HttpMethodTypes
    signal?: AbortSignal
    body?: Record<string, unknown>
}

export type MetaTagsTypes = {
    title?: TranslationKeys | undefined | string
    index?: boolean
}

export type RootLayout = {
    children: React.ReactNode
}

export type NormalLayoutTypes = {
    children: ReactNode
}

export type IconComponentProps = {
    size?: string
    className?: string
    color?: string
}

export type ButtonComponentProps = {
    children?: ReactNode | string
    className?: string
    disabled?: boolean
    target?: '_blank'
    tabIndex?: number
    iconClassName?: string | undefined
    href?: string | undefined
    element?: 'button' | 'span'
    loading?: boolean
    icon?: ReactNode
    onClick?: Function | undefined
    style?: CSSProperties
    download?: boolean
    type?: ButtonTypes
    onEnter?: Function | undefined
    id?: string | null
}

export type UserDropdownListItemType = {
    href: string,
    name: TranslationKeys,
    onClick: (event: MouseEvent<HTMLAnchorElement>) => void
    isActive: boolean
    onlyAdmin: boolean
    icon: ReactNode
}

export type FooterSocialMediaLinksType = {
    href: string,
    icon: FC<SVGProps<SVGSVGElement>>,
    name: TranslationKeys
    show: true
}

export type LoadingReference = {
    current: boolean
}

export type HandleColorsFunctionsReturnTypes = {
    color: string
}

export type ValidationFunctionObjectReturnTypes = {
    error: boolean
    message: string
}

export type InputComponentProps = {
    id: string
    label?: string | undefined
    placeholder: string
    value: string
    required: boolean
    showError: boolean
    disabled: boolean
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    isError?: ValidationFunctionObjectReturnTypes
    max?: number | undefined
    containerClassName?: string | undefined
    labelClassname?: string | undefined
    inputClassName?: string | undefined
    showDisabled?: boolean
    hideMax?: boolean | undefined
    icon?: ReactNode | undefined
}

export type StringValidationProps = {
    value: unknown,
    min: number | null,
    max: number | null,
    noNumbers: boolean,
    noSpecialCharacters: boolean
    entityTranslation: TranslationKeys
}

export type SelectComponentProps = {
    id: string
    label: string
    placeholder: string
    required: boolean
    value: string | null
    onChange: (id: string, e: MouseEvent<HTMLDivElement>) => void
    showError: boolean
    list: Array<any>
    validationFunction: (value: string) => ValidationFunctionObjectReturnTypes | false
    idAccessor: '_id' | 'type'
    valueAccessor: 'Name' | 'name'
    disabled: boolean
    classes?: string
    iframeId?: string | undefined
}

export type UseOpenFunctionReturnTypes = {
    open: boolean
    setOpen: Function
    ref: Reference
}

export type CheckboxComponentProps = {
    id: string
    label?: string
    message: TranslationKeys
    required: boolean
    className?: string
    value: boolean
    onClick: () => void
    disabled: boolean
}

export type PageHeaderProps = {
    title: TranslationKeys
    description: TranslationKeys
}

export type ManageBusinessTabType = {
    title: TranslationKeys
    slug: ManageBusinessTabTypes
    icon: FC<SVGProps<SVGSVGElement>>
    disabled: boolean
    active: boolean
}

export type LinkIconFunctionProps = {
    link: string
}

export type LabelProps = {
    label: string | undefined
    required: boolean
}

export type LinksValidationFunctionProps = {
    link: string
    links: Array<string>
}

export type LinksValidationsTypes = {
    isUsed: boolean
    isValidLink: boolean
}