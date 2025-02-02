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
            color: '#D58888'
        }

        if (type === NOTIFICATION_TYPES.SUCCESS) return {
            color: '#52BD9A'
        }

        if (type === NOTIFICATION_TYPES.WARNING) return {
            color: '#F9C315'
        }

        if (type === NOTIFICATION_TYPES.INFO) return {
            color: '#91B8F3'
        }

        else return {
            color: '#C9CDD5'
        }
    }

    const HandleIcon = (type: NotificationTypes, color: string): ReactNode => {
        if (type === NOTIFICATION_TYPES.ERROR) return <ErrorIcon color={color} className='w-[22px] h-[22px]' />
        if (type === NOTIFICATION_TYPES.SUCCESS) return <SuccessIcon color={color} className='w-[22px] h-[22px]' />
        if (type === NOTIFICATION_TYPES.WARNING) return <WarningIcon color={color} className='w-[22px] h-[22px]' />
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

                const { color } = HandleColors(Type)

                return (
                    <div key={Id} className='flex border-gray-50 border-opacity-20 shadow-sm border items-center w-full max-w-md py-1.5 px-2 bg-white rounded-xl'>
                        <div className={`gap-0.5 items-center flex justify-between rounded-full ${Count > 1 ? 'px-2 py-[3px]' : 'py-[3px] px-[4px]'}`}>
                            {HandleIcon(Type, color)}

                            {
                                Count > 1 &&
                                <span style={{ color }} className='text-[13px] mb-[1.5px] font-medium'>
                                    {Count > 99 ? '99+' : Count}
                                </span>
                            }
                        </div>
                        
                        <div className='ml-1 text-[13px] font-medium text-gray-600'>
                            {Title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Notification