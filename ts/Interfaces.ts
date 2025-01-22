import type { ManageBusinessTabTypes, NotificationInterface, UserRoleTypes } from '@/ts'
import type { Reference } from 'react'

export interface UserInterface {
    _id: string
    Uid: string
    Name: string | null
    Surname: string | null
    Email: string
    Avatar: string | null
    Phone: string | null
    Role: UserRoleTypes
    Visits: number
    Businesses: number
    Country: CountryInterface | null
    City: CityInterface | null
    Last_Active_At: Date
    Created_At: Date
    Updated_At: Date | null
}

export interface AuthStateInterface {
    User: UserInterface | null | false
    Loading: boolean
    Error: boolean
    AuthModal: boolean
    SmallLoading: boolean
    UserModal: boolean
    UpdatingUser: boolean
    ClosingAccount: boolean
    UserForm: UserFormInterface
    UserFormErrors: UserFormErrors
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
    NotFound: boolean
    SetBusinessState: (payload: Partial<BusinessStateInterface>) => void
}

export interface UserBusinessesStateInterface {
    UserBusinesses: Array<BusinessInterface>
    Loading: boolean
    Error: boolean
    Reference: Reference | null
    HasMore: boolean
    SetUserBusinessesState: (payload: Partial<UserBusinessesStateInterface>) => void
}

export interface SimilarBusinessesStateInterface {
    Businesses: Array<BusinessInterface>
    Loading: boolean
    Error: boolean
    SetSimilarBusinessesState: (payload: Partial<SimilarBusinessesStateInterface>) => void
}

export interface UserSavesStateInterface {
    UserSaves: Array<BusinessInterface>
    Loading: boolean
    Error: boolean
    Reference: Reference | null
    HasMore: boolean
    SetUserSavesState: (payload: Partial<UserSavesStateInterface>) => void
}

export interface BusinessFormStateInterface {
    Form: BusinessFormInterface | null
    Tab: ManageBusinessTabTypes
    FormErrors: BusinessFormErrors | null
    Mode: 'create' | 'update' | null
    Loading: boolean
    Error: boolean
    NotFound: boolean
    Creating: boolean
    Updating: boolean
    SetBusinessFormState: (payload: Partial<BusinessFormStateInterface>) => void
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
    Image: string
    Address: string
    Gallery: Array<string>
}

export interface CountryInterface {
    readonly _id: string
    Name: string
    Code: number
    Posts: number
    Users: number
    Cities: number
    Created_At: Date
    Updated_At: Date
}

export interface CityInterface {
    readonly _id: string
    Name: string
    Posts: number
    Users: number
    Country: CountryInterface
    Created_At: Date
    Updated_At: Date
}

export interface CitiesStateInterface {
    Cities: Array<CityInterface>
    Loading: boolean
    Error: boolean
    SetCitiesState: (payload: Partial<CitiesStateInterface>) => void
}

export interface CountriesStateInterface {
    Countries: Array<CountryInterface>
    Loading: boolean
    Error: boolean
    SetCountriesState: (payload: Partial<CountriesStateInterface>) => void
}

export interface UserFormInterface {
    Name: string
    Surname: string
    Email: string 
    City: string | null
    Country: string | null
}

export interface UserFormErrors {
    Name: boolean
    Surname: boolean
    Email: boolean
    City: boolean
    Country: boolean
}

export interface HoursInterface {
    Monday: string | false
    Tuesday: string | false
    Wednesday: string | false
    Thursday: string | false
    Friday: string | false
    Saturday: string | false
    Sunday: string | false
}

export interface BusinessLocationInterface {
    Name: string
    Address: string
    Phone: string
    Email: string
    Website: string
    Hours: HoursInterface
}

export interface BusinessFormInterface {
    Title: string
    Description: string
    Locations: Array<BusinessLocationInterface>
    Links: Array<string>
    Link: string
    Address: BusinessLocationInterface
}

export interface BusinessFormErrors {
    Title: boolean
    Description: boolean
    Link: boolean
    Links: Array<boolean>
    Address: {
        Name: boolean
        Address: boolean
        Phone: boolean
        Email: boolean
        Website: boolean
    },
}