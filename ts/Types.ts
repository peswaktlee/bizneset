import type { CSSProperties, ReactNode, MouseEvent } from 'react'
import type { METHODS } from 'http'

import { sq_AL } from '@/data/langs'
import { USER_ROLES, NOTIFICATION_TYPES, BUTTON_TYPES } from '@/data/constants'

export type TranslationKeys = keyof typeof sq_AL
export type TranslationTypes = typeof sq_AL

export type UserRoleTypes = (typeof USER_ROLES)[keyof typeof USER_ROLES]
export type HttpMethodTypes = (typeof METHODS)[keyof typeof METHODS]
export type NotificationTypes = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES]
export type ButtonTypes = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES]

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

export type LoadingReference = {
    current: boolean
}

export type HandleColorsFunctionsReturnTypes = {
    bg: string
    color: string
}
