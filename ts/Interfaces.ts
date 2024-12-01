import { NotificationInterface, UserRoleTypes } from '~/ts'

export interface UserInterface {
    _id: string
    Name: string
    Email: string
    Avatar: string
    StripeCustomerId: string
    Uid: string
    ProjectCount: number
    PageCount: number
    Impersonationing: null | string
    ComponentCount: number
    Role: UserRoleTypes
    Visits: number
    LastVisited: Date
    Created_At: Date
    Updated_At: Date
}

export interface AuthStateInterface {
    User: UserInterface | null | false
    Loading: boolean
    Error: boolean
    SmallLoading
    SetAuthState: (payload: Partial<AuthStateInterface>) => void
}

export interface NotificationStateInterface {
    Notifications: Array<NotificationInterface>
    Notification: (notification: string) => void
}

export interface ConfirmationStateInterface {
    Title: string
    Open: boolean
    onConfirm: () => void
    SetConfirmationState: (payload: Partial<ConfirmationStateInterface>) => void
}

export interface RequestFunctionReturnProps {
    success: boolean
    message: string
    code: number
    data: any
}