import type { CSSProperties } from 'react'
import { CDN_URL } from '@/data/constants'

export const NOTIFICATION_DURATION = 3000
export const MAX_LINKS = 5
export const MAX_TERM_LENGTH = 50
export const MAX_LOGO_SIZE_IN_MB = 32

export const DEFAULT_AUTH_STATE = {
    Loading: true,
    User: null,
    AuthModal: false,
    Error: false,
    SmallLoading: false,
    UpdatingUser: false,
    UserModal: false,
    ClosingAccount: false,
    UserForm: {
        Name: '',
        Surname: '',
        Email: '',
        Country: null,
        City: null,
        OnBusinessStatuses: false
    },
    UserFormErrors: {
        Name: false,
        Surname: false,
        Email: false,
        Country: false,
        City: false,
        OnBusinessStatuses: false
    }
}

const DEFAULT_BUSINESSES_FILTERS = {
    Term: '',
    Category: null,
    City: null,
    Country: null
}

export const DEFAULT_APP_STATE = {
}

export const DEFAULT_CATEGORIES_STATE = {
    Categories: [],
    Loading: true,
    Error: false
}

export const DEFAULT_BUSINESS_STATE = {
    Business: null,
    Loading: true,
    Error: false,
    NotFound: false
}

export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user'
}

export const ENV_MODES = {
    DEV: 'development',
    PRODUCTION: 'production'
}

export const STATES = {
    AUTH: 'AuthState',
    NOTIFICATION: 'NotificationState',
    CONFIRMATION: 'ConfirmationState',
    BUSINESSES: 'BusinessesState',
    BUSINESS: 'BusinessState',
    CATEGORIES: 'CategoriesState',
    APP: 'AppState',
    CITIES: 'CitiesState',
    COUNTRIES: 'CountriesState',
    BUSINESS_FORM: 'BusinessFormState',
    USER_BUSINESSES: 'UserBusinessesState',
    USER_SAVES: 'UserSavesState'
}

export const DEFAULT_NOTIFICATION_STATE = {
    Notifications: []
}

export const DEFAULT_CONFIRMATION_STATE = {
    Title: '',
    Open: false
}

export const METHODS = {
    POST: 'POST'
}

export const LOG_TYPES = {
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning'
}

export const ENDPOINTS = {
    DEBUG: {
        LOG: 'debug/insert-log'
    },
    USERS: {
        AUTH: 'users/auth',
        UPDATE_USER: 'users/update',
        CLOSE_ACCOUNT: 'users/close'
    },
    CATEGORIES: {
        LIST_CATEGORIES: 'categories/list'
    },
    BUSINESSES: {
        LIST: 'businesses/list',
        USER_LIST: 'businesses/user-list',
        VIEW: 'businesses/view',
        SUBMIT: 'businesses/submit'
    },
    CITIES: {
        LIST: 'cities/list'
    },
    COUNTRIES: {
        LIST: 'countries/list'
    },
    SAVES: {
        LIST: 'saves/list'
    }
}

export const API_VERSIONS = {
    V1: '1'
}


export const LANGUAGES = {
    ALBANIAN: 'sq_AL'
}

export const PUBLIC_PATHS = {
    IMAGES: {
        THUBNAIL: '/images/thumbnail.webp'
    }
}

export const PATHS = {
    HOME: '/',
    ACCOUNT: 'llogaria',
    BUSSINES: 'biznesi',
    SAVED: 'ruajturat',
    CATEGORIES: 'kategoria',
    ADD_BUSINESS: 'shto',
    TERMS: 'kushtet',
    PRIVACY: 'privatesia',
    USER_BUSINESSES: 'bizneset'
}

export const CATEGORIES_PATHS = {
    ALL: 'te-gjitha',
    TECH: 'teknologji',
    FOOD: 'ushqimore',
    STORE: 'dyqane',
    HEALTH: 'shendet',
    FUN: 'argetim',
    EDUCATION: 'edukim',
    BUSINESS: 'patundshmeri',
    FINANCE: 'finance',
    TOURISM: 'turizem',
    AUTO: 'auto',
    OJQ: 'ojq',
    OTHER: 'te-tjera'
}

export const DEFAULT_CATEGORY = {
    _id: '',
    Name: 'Të Gjitha',
    Slug: 'te-gjitha',
    Businesses: 0,
    Position: 0,
    Created_At: new Date(),
    Updated_At: null
}

export const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning'
}

export const BUTTON_TYPES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    ACTION: 'action'
}

export const ELEMENTS_IDS = {
    GOOGLE_ANALYTICS: 'google-analytics',
    HOTJAR: 'hotjar'
}

export const CDN_ASSETS = {
    HOME_HERO: `${CDN_URL}/assets/home-hero.webp`,
    WORLD_ICON: `${CDN_URL}/assets/world-icon.svg`

}

export const SOCIAL_MEDIA_LINKS = {
    FACEBOOK: 'https://www.facebook.com',
    YOUTUBE: 'https://www.youtube.com',
    LINKEDIN: 'https://www.linkedin.com',
    INSTAGRAM: 'https://www.instagram.com'
}

export const DEFAULT_BUSINESSES_STATE = {
    Businesses: [],
    Filters: DEFAULT_BUSINESSES_FILTERS,
    TempFilters: DEFAULT_BUSINESSES_FILTERS,
    Loading: true,
    Error: false,
    Reference: null,
    HasMore: true
}

export const DEFAULT_USER_BUSINESSES_STATE = {
    UserBusinesses: [],
    Loading: true,
    Error: false,
    Reference: null,
    HasMore: true
}

export const DEFAULT_SIMILAR_BUSINESSES_STATE = {
    Businesses: [],
    Loading: true,
    Error: false
}

export const DEFAULT_USER_SAVES_STATE = {
    UserSaves: [],
    Loading: true,
    Error: false,
    Reference: null,
    HasMore: true
}

export const DEFAULT_COUNTRIES_STATE = {
    Countries: [],
    Loading: true,
    Error: false
}

export const DEFAULT_CITIES_STATE = {
    Cities: [],
    Loading: true,
    Error: false
}

export const ACTIVE_INPUT_ELEMENTS = [
    'INPUT',
    'TEXTAREA',
    'SELECT'
]

export const KEYSTROKES = {
    ESCAPE: 'Escape',
    ENTER: 'Enter',
    ESC: 'Esc',
    BACKSPACE: 'Backspace',
    DELETE: 'Delete'
}

export const DISABLED_STYLES: CSSProperties = { 
    opacity: .5, 
    pointerEvents: 'none' 
}

export const MANAGE_BUSINESS_TABS = {
    GENERAL_DATA: 'general-data',
    LOCATIONS: 'locations',
    GALLERY: 'gallery',
    LINKS: 'links'
}

export const DEFAULT_BUSINESS_FORM_STATE = {
    Form: null,
    Tab: MANAGE_BUSINESS_TABS.GENERAL_DATA,
    FormErrors: null,
    Mode: null,
    Loading: true,
    Error: false,
    NotFound: false,
    Creating: false,
    Updating: false
}

export const FILE_TYPES = {
    IMAGE_PNG: 'image/png',
    IMAGE_WEBP: 'image/webp'
}

export const FILE_EXTENSION = {
    PNG: 'png',
    WEBP: 'webp'
}

export const CDN_BUCKETS = {
    AVATARS: 'avatars'
}