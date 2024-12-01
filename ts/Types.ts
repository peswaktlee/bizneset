import { METHODS } from 'http'

import { sq_AL } from '~/langs'
import { USER_ROLES } from '~/constants/Generals'

export type TranslationKeys = keyof typeof sq_AL
export type TranslationTypes = typeof sq_AL

export type UserRoleTypes = (typeof USER_ROLES)[keyof typeof USER_ROLES]
export type HttpMethodTypes = (typeof METHODS)[keyof typeof METHODS]

export type NotificationInterface = {
    Id: number
    Title: string
    Count: number
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