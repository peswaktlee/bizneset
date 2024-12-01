export const DEFAULT_AUTH_STATE = {
    Loading: false,
    User: null,
    Error: false,
    SmallLoading: false
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
    CONFIRMATION: 'ConfirmationState'
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
        LOG: '/debug/log'
    },
    USERS: {
        AUTH: '/users/auth'
    }
}

export const API_VERSIONS = {
    V1: '1'
}


export const LANGUAGES = {
    ALBANIAN: 'sq_AL'
}
