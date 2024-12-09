export const DEFAULT_AUTH_STATE = {
    Loading: false,
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