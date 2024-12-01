import { type NotificationStateInterface } from '~/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_NOTIFICATION_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '~/constants'

const NotificationState = create(
    devtools<NotificationStateInterface>(
        (set) => {
            const NotificationInitialState: NotificationStateInterface = {
                Notifications: DEFAULT_NOTIFICATION_STATE.Notifications,
                Notification: (notification: string) => {
                    const message = {
                        Id: Date.now(),
                        Title: notification,
                        Count: 1
                    }
                    
                    set((state: NotificationStateInterface) => {
                        const existingNotification = state.Notifications.find(
                            notification => notification?.Title === message?.Title
                        )
                        
                        if (existingNotification) {
                            const updatedNotifications = state.Notifications.map(notification => 
                                notification.Title === message.Title 
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
                    }, 3000)
                }
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