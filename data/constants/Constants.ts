export const NOTIFICATION_DURATION = 3000

export const DEFAULT_AUTH_STATE = {
    Loading: true,
    User: null,
    Error: false,
    SmallLoading: false,
    UserModal: false
}

const DEFAULT_BUSINESSES_FILTERS = {
    Term: '',
    Category: null,
    City: null,
    Country: null
}

export const DEFAULT_BUSINESSES_STATE = {
    Businesses: [],
    Filters: DEFAULT_BUSINESSES_FILTERS,
    Loading: true,
    Error: false,
    Reference: null,
    HasMore: true
}

export const DEFAULT_CATEGORIES_STATE = {
    Categories: [],
    Loading: true,
    Error: false
}

export const DEFAULT_BUSINESS_STATE = {
    Business: null,
    Loading: true,
    Error: false
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
    USER: 'UserState',
    NOTIFICATION: 'NotificationState',
    CONFIRMATION: 'ConfirmationState',
    BUSINESSES: 'BusinessesState',
    BUSINESS: 'BusinessState',
    CATEGORIES: 'CategoriesState'
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
        AUTH: 'users/auth-user'
    },
    CATEGORIES: {
        LIST_CATEGORIES: 'categories/list-categories'
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
    BUSINESSES: 'bizneset',
    SAVED: 'te-ruajturat',
    CATEGORIES: 'kategorite'
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