import type { MouseEvent, ReactNode } from 'react'
import type { UserDropdownListItemType } from '@/ts'

import { useShallow } from 'zustand/react/shallow'
import { Link } from '@/data/constants'
import { AuthState } from '@/data/states'
import { useRouter } from 'next/router'
import { UserDropdownList } from '@/data/lists'
import { Translation } from '@/helpers/generals'

const UserDropdownModal = () => {
    const { pathname, push } = useRouter()

    const { User, UserModal } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                UserModal: state.UserModal
            }
        })
    )
    
    if (User && UserModal) return (
        <div className='shadow-lg absolute border border-gray-100 top-8 right-0 my-4 w-48 text-base list-none bg-white rounded-xl divide-y divide-gray-50 z-[100000000]'>
            {
                UserDropdownList(pathname, push)?.map((item: UserDropdownListItemType, index: number) => {
                    const { 
                        href, 
                        onClick, 
                        icon,
                        name, 
                        isActive
                    } = item

                    const isFirst = index === 0
                    const isLast = index === UserDropdownList(pathname, push).length - 1

                    return (
                        <Link
                            key={name} 
                            href={href} 
                            onClick={(event: MouseEvent<HTMLAnchorElement>) => onClick(event)} 
                            className={`text-gray-800 font-medium cursor-pointer flex items-center justify-between py-1 px-3 text-[13px] transition-all ease-in-out duration-500 outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-white ${isActive ? 'bg-gray-50' : 'hover:bg-gray-50'} ${isLast ? 'rounded-b-xl pb-1.5' : ''} ${isFirst ? 'rounded-t-xl pt-1.5' : ''} z-[999999]`}
                        >
                            <div className='flex items-center mr-2 whitespace-nowrap'>
                                {icon as ReactNode}
                                {Translation(name)}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default UserDropdownModal