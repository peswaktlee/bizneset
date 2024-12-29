import type { MouseEvent } from 'react'
import type { RouterPathFunctionType, UserDropdownListItemType } from '@/ts'

import { BlockSameLinkClick } from '@/helpers/events'
import { AuthState } from '@/data/states'
import { UserLogout } from '@/actions/users'
import { PATHS, USER_ROLES } from '@/data/constants'

import { 
    BuildingsIcon, 
    BookmarkIcon, 
    UserIcon, 
    LogoutIcon 
} from '@/ui/icons'

const UserDropdownList = (pathname: string, push: RouterPathFunctionType): Array<UserDropdownListItemType> => {
    const { User } = AuthState.getState()

    let list = [
        {
            href: `/${PATHS.ACCOUNT}`,
            name: 'account',
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.ACCOUNT}`),
            isActive: pathname === `/${PATHS.ACCOUNT}`,
            icon: <UserIcon strokeWidth={2} className='w-4 h-4 mr-2 text-gray-500' />,
            onlyAdmin: false
        },
        {
            href: `/${PATHS.BUSINESSES}`,
            name: 'my-businesses',
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.BUSINESSES}`),
            isActive: pathname === `/${PATHS.BUSINESSES}`,
            icon: <BuildingsIcon className='w-5 h-5 mr-2' />,
            onlyAdmin: false
        },
        {
            href: `/${PATHS.SAVED}`,
            name: 'saved',
            onClick: (event: MouseEvent<HTMLAnchorElement>) => BlockSameLinkClick(event, pathname === `/${PATHS.SAVED}`),
            isActive: pathname === `/${PATHS.SAVED}`,
            icon: <BookmarkIcon className='w-5 h-5 mr-2' />,
            onlyAdmin: false
        },
        {
            href: '',
            name: 'logout',
            isActive: false,
            icon: <LogoutIcon strokeWidth={2} className='w-4 h-4 mr-2 text-gray-500' />,
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