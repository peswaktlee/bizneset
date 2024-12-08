import type { MouseEvent } from 'react'
import type { RouterPathFunctionType, UserDropdownListItemType } from '@/ts'

import { BlockSameLinkClick } from '@/helpers/events'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon, BuildingStorefrontIcon, UserIcon } from '@heroicons/react/24/outline'
import { AuthState } from '@/data/states'
import { UserLogout } from '@/actions/users'
import { PATHS, USER_ROLES } from '@/data/constants'

const UserDropdownList = (pathname: string, push: RouterPathFunctionType): Array<UserDropdownListItemType> => {
    const { User } = AuthState.getState()

    let list = [
        {
            href: `/${PATHS.ACCOUNT}`,
            name: PATHS.ACCOUNT,
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.ACCOUNT}`),
            isActive: pathname === `/${PATHS.ACCOUNT}`,
            icon: <UserIcon strokeWidth={2} className='w-4 h-4 mr-2 text-gray-500' />,
            onlyAdmin: true
        },
        {
            href: `/${PATHS.BUSINESSES}`,
            name: PATHS.BUSINESSES,
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.BUSINESSES}`),
            isActive: pathname === `/${PATHS.BUSINESSES}`,
            icon: <BuildingStorefrontIcon className='w-5 h-5 mr-2' />,
            onlyAdmin: true
        },
        {
            href: `/${PATHS.SAVED}`,
            name: PATHS.SAVED,
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.SAVED}`),
            isActive: pathname === `/${PATHS.SAVED}`,
            icon: <BookmarkIcon className='w-5 h-5 mr-2' />,
            onlyAdmin: true
        },
        {
            href: null,
            name: null,
            isActive: false,
            icon: <ArrowLeftCircleIcon strokeWidth={2} className='w-4 h-4 mr-2 text-gray-500' />,
            onlyAdmin: false,
            onClick: () => {
                UserLogout()
                push('/')
            }
        }
    ]
    
    // @ts-ignore
    if (User && User?.Role === USER_ROLES.USER) list = list.filter((item: UserDropdownListItemType) => !item.onlyAdmin)

    // @ts-ignore
    return list
}

export default UserDropdownList