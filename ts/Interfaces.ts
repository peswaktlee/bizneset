import { NotificationInterface, UserRoleTypes } from '@/ts'

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
    AuthModal: boolean
    SmallLoading: boolean
    UserModal: boolean
    SetAuthState: (payload: Partial<AuthStateInterface>) => void
}

export type BusinessesFilters = {
    Term: string
    Category: null | string
    City: null | string
    Country: null | string
}

export interface BusinessesStateInterface {
    Businesses: Array<BusinessInterface>
    Filters: BusinessesFilters
    Loading: boolean
    Error: boolean
    Reference: null | string
    HasMore: boolean
    SetBusinessesState: (payload: Partial<BusinessesStateInterface>) => void
}

export interface AppStateInterface {
    FixedHeader: boolean
    ScrollPosition: number
    SetAppState: (payload: Partial<AppStateInterface>) => void
}

export interface BusinessStateInterface {
    Business: BusinessInterface | null
    Loading: boolean
    Error: boolean
    SetBusinessState: (payload: Partial<BusinessStateInterface>) => void
}

export interface CategoriesStateInterface {
    Categories: Array<CategoryInterface>
    Loading: boolean
    Error: boolean
    SetCategoriesState: (payload: Partial<CategoriesStateInterface>) => void
}

export interface NotificationStateInterface {
    Notifications: Array<NotificationInterface>
    Notification: {
        Error: (notification: string) => void
        Success: (notification: string) => void
        Warning: (notification: string) => void
        Info: (notification: string) => void
    }
    SetNotificationState: (payload: Partial<NotificationStateInterface>) => void
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

export interface CategoryInterface {
    _id: string
    Name: string
    Slug: string
    Businesses: number
    Position: number
    Created_At: Date
    Updated_At: Date | null
}


export interface BusinessInterface {
    _id: string
    Name: string
    Slug: string
    Businesses: number
    Image: string
    Gallery: Array<string>
}