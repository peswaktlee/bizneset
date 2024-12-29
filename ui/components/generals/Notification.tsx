import type { FC, ReactNode } from 'react'
import type { HandleColorsFunctionsReturnTypes, NotificationInterface, NotificationTypes } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { NotificationState } from '@/data/states'
import { NOTIFICATION_TYPES } from '@/data/constants'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/ui/icons'

const Notification: FC = (): ReactNode => {
    const { Notifications } = NotificationState(
        useShallow(state => {
            return {
                Notifications: state.Notifications
            }
        })
    )

    const HandleColors = (type: NotificationTypes): HandleColorsFunctionsReturnTypes => {
        if (type === NOTIFICATION_TYPES.ERROR) return {
            bg: '#D58888',
            color: '#FFFFFF'
        }

        if (type === NOTIFICATION_TYPES.SUCCESS) return {
            bg: '#52BD9A',
            color: '#FFFFFF'
        }

        if (type === NOTIFICATION_TYPES.WARNING) return {
            bg: '#F9C315',
            color: '#FFFFFF'
        }

        if (type === NOTIFICATION_TYPES.INFO) return {
            bg: '#91B8F3',
            color: '#FFFFFF'
        }

        else return {
            bg: '#C9CDD5',
            color: '#FFFFFF'
        }
    }

    const HandleIcon = (type: NotificationTypes, color: string): ReactNode => {
        if (type === NOTIFICATION_TYPES.ERROR) return <ErrorIcon color={color} className='w-[18px] h-[18px]' />
        if (type === NOTIFICATION_TYPES.SUCCESS) return <SuccessIcon color={color} className='w-[18px] h-[18px]' />
        if (type === NOTIFICATION_TYPES.WARNING) return <WarningIcon color={color} className='w-[18px] h-[18px]' />
        else return <InfoIcon color={color} className='w-[18px] h-[18px]' />
    }

    return (
        <div className='absolute transform right-12 bottom-12 md:right-4 md:bottom-4 flex flex-col gap-2 z-[999999999]'>
            {Notifications?.slice(-5)?.map((notification: NotificationInterface) => {
                const { 
                    Id, 
                    Title, 
                    Count,
                    Type
                } = notification

                const { 
                    bg, 
                    color 
                } = HandleColors(Type)

                return (
                    <div key={Id} className='flex border-gray-50 border-opacity-20 shadow-sm border items-center w-full max-w-md py-2 px-3 text-gray-500 bg-white/10 backdrop-blur-sm rounded-2xl'>
                        <div style={{ background: bg, color: color }} className={`gap-1 items-center flex justify-between rounded-full ${Count > 1 ? 'px-2 py-[3px]' : 'py-[3px] px-[4px]'}`}>
                            {HandleIcon(Type, color)}

                            {
                                Count > 1 &&
                                <span className='text-[13px] font-medium'>
                                    {Count > 99 ? '99+' : Count}
                                </span>
                            }
                        </div>
                        
                        <div className='ps-3 text-[13px] font-bold text-white'>
                            {Title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Notification