import type { BusinessInterface } from '@/ts'

import { CDN_URL } from '@/data/constants'

export const NOTIFICATION_DURATION = 3000

export const DEFAULT_AUTH_STATE = {
    Loading: true,
    User: null,
    AuthModal: false,
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

export const DEFAULT_APP_STATE = {
    FixedHeader: false,
    ScrollPosition: 0
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

export const DEFAULT_BUSINESS_FORM_STATE = {
    Form: null,
    Mode: null,
    Loading: true,
    Error: false,
    NotFound: false,
    Creating: false,
    Updating: false
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
        AUTH: 'users/auth'
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
    ADD_BUSINESS: 'biznes',
    TERMS: 'kushtet',
    PRIVACY: 'politika',
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
    HOME_HERO: `${CDN_URL}/assets/home-hero.webp`
}

export const SOCIAL_MEDIA_LINKS = {
    FACEBOOK: 'https://www.facebook.com',
    YOUTUBE: 'https://www.youtube.com',
    LINKEDIN: 'https://www.linkedin.com',
    INSTAGRAM: 'https://www.instagram.com'
}

export const ListOfBusinesses: Array<BusinessInterface> = [
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqani Lodrave',
        Slug: 'dyqani-lodrave',
        Image: 'https://images.pexels.com/photos/13973499/pexels-photo-13973499.jpeg',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Arbrit, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Kafjallë',
        Slug: 'kafjalle',
        Image: 'https://images.pexels.com/photos/13359138/pexels-photo-13359138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Fehmi Agani, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Ushqime të Shpejta',
        Slug: 'ushqime-te-shpejta',
        Image: 'https://images.pexels.com/photos/11010065/pexels-photo-11010065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dardanëve, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Palestra "Fit"',
        Slug: 'palester-fit',
        Image: 'https://images.pexels.com/photos/2199190/pexels-photo-2199190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqani i Mobiljeve',
        Slug: 'dyqani-i-mobiljeve',
        Image: 'https://images.pexels.com/photos/5328302/pexels-photo-5328302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Bar "Kafe"',
        Slug: 'bar-kafe',
        Image: 'https://images.pexels.com/photos/1662562/pexels-photo-1662562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Kopshti "Lulet e Verës"',
        Slug: 'kopshti-lulet-e-veres',
        Image: 'https://images.pexels.com/photos/19139351/pexels-photo-19139351/free-photo-of-facade-of-a-bakery-in-a-traditional-townhouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Agjensia e Patundshmërisë',
        Slug: 'agjensia-e-patundshmerise',
        Image: 'https://images.pexels.com/photos/6044236/pexels-photo-6044236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'TravelKos',
        Slug: 'travelkos',
        Image: 'https://images.pexels.com/photos/7345374/pexels-photo-7345374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'AutoServisi "Makina"',
        Slug: 'autoservisi-makina',
        Image: 'https://images.pexels.com/photos/3735183/pexels-photo-3735183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Shkolle Private "Mes"',
        Slug: 'shkolle-private-mes',
        Image: 'https://images.pexels.com/photos/3735172/pexels-photo-3735172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Paintball "Adrenalina"',
        Slug: 'paintball-adrenalina',
        Image: 'https://images.pexels.com/photos/3965554/pexels-photo-3965554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [
            'https://images.unsplash.com/photo-1730562885841-0163ae9eeca9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        Address: 'Rruga e Dibresë, Prishtinë'
    }
]

export const DEFAULT_BUSINESSES_STATE = {
    Businesses: [],
    Filters: DEFAULT_BUSINESSES_FILTERS,
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