import type { NotificationStateInterface, NotificationTypes } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_NOTIFICATION_STATE, 
    ENV_MODE,
    ENV_MODES, 
    NOTIFICATION_DURATION, 
    NOTIFICATION_TYPES, 
    STATES 
} from '@/data/constants'

const OpenNotification = (set: Function, notification: string, type: NotificationTypes) => {
    const message = {
        Id: Date.now(),
        Title: notification,
        Count: 1,
        Type: type
    }

    set((state: NotificationStateInterface) => {
        const existingNotification = state.Notifications.find(
            notification => notification?.Title === message?.Title
        )
        
        if (existingNotification) {
            const updatedNotifications = state.Notifications.map(notification => 
                notification.Title === message.Title && notification.Type === message.Type 
                    ? { ...notification, Count: notification.Count + 1 }
                    : notification
            )

            return {
                ...state,
                Notifications: updatedNotifications
            }
        }

        return {
            ...state,
            Notifications: [...state.Notifications, message]
        }
    })

    setTimeout(() => {
        set((state: NotificationStateInterface) => {
            return {
                ...state,
                Notifications: state.Notifications.filter(notification => notification?.Id !== message?.Id)
            }
        })
    }, NOTIFICATION_DURATION)
}

const NotificationState = create(
    devtools<NotificationStateInterface>(
        (set) => {
            const NotificationInitialState: NotificationStateInterface = {
                Notifications: DEFAULT_NOTIFICATION_STATE.Notifications,
                Notification: {
                    Error: (notification: string) => OpenNotification(set, notification, NOTIFICATION_TYPES.ERROR),
                    Success: (notification: string) => OpenNotification(set, notification, NOTIFICATION_TYPES.SUCCESS),
                    Warning: (notification: string) => OpenNotification(set, notification, NOTIFICATION_TYPES.WARNING),
                    Info: (notification: string) => OpenNotification(set, notification, NOTIFICATION_TYPES.INFO)
                },
                SetNotificationState: (payload: Partial<NotificationStateInterface>) => set((state: NotificationStateInterface) => {
                    return { 
                        ...state, 
                        ...payload
                    }
                })
            }

            return NotificationInitialState
        },
        {
            name: STATES.NOTIFICATION,
            store: STATES.NOTIFICATION,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default NotificationState