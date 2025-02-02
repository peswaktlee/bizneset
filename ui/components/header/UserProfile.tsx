import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { useImage, usePath } from '@/hooks'
import { AuthState } from '@/data/states'
import { Button } from '@/ui/views'
import { BuildUserAvatarUrl, ImageOnDrag } from '@/helpers/events'
import { AddIcon, UserIcon } from '@/ui/icons'
import { Translation } from '@/helpers/generals'
import { Link, PATHS } from '@/data/constants'

const UserProfile: FC = (): ReactNode => {
    const path = usePath()

    const isAdd = path === `/${PATHS.ADD_BUSINESS}`
    const isHome = path === PATHS.HOME || path?.includes(PATHS.CATEGORIES)

    const {
        User,
        Loading,
        UserModal,
        SetAuthState
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                UserModal: state.UserModal,
                SetAuthState: state.SetAuthState
            }
        })
    )

    const HandleUserModal = () => {
        SetAuthState({ UserModal: !UserModal })
    }

    const {
        isEmpty,
        loading,
        error,
        setLoading,
        setError
    } = useImage(User ? BuildUserAvatarUrl(User?._id) : null)

    const styles = {
        overflow: 'hidden',
        display: (!loading && !error && !isEmpty) ? 'block' : 'none'
    }

    if (User && !Loading) return (
        <div className='w-full flex items-center z-10'>
            {
                !isAdd &&
                <Link 
                    href={PATHS.ADD_BUSINESS} 
                    className={`flex items-center rounded-full mr-2 pl-1.5 pr-3 gap-1 transition-bg ease-in-out duration-500 ${isHome ? 'bg-gray-50/10 hover:bg-gray-50/15' : 'bg-gray-200/20 hover:bg-gray-200/35'}`}
                >
                    <AddIcon width={20} className={isHome ? 'text-white' : 'text-gray-800'} />

                    <p className={`font-medium text-sm ${isHome ? 'text-white' : 'text-gray-800'}`}>
                        {Translation('add-your-business')}
                    </p>
                </Link>
            }

            <Button
                type='secondary'
                onClick={HandleUserModal}
                className='relative text-sm flex items-center justify-center p-0 w-9 h-9 rounded-full bg-gray-50'
                icon={<UserIcon width='18px' height='18px' className='text-gray-500' />}
            >
                <img
                    style={styles}
                    className='w-full h-full p-[1px] rounded-full absolute top-0 left-0 object-cover bottom-0 right-0 z-10'
                    src={BuildUserAvatarUrl(User?._id)}
                    onLoad={() => setLoading(false)}
                    alt={User?.Name || Translation('user-avatar')}
                    onDragStart={ImageOnDrag}
                    onError={() => {
                        setError(true)
                        setLoading(false)
                    }}
                />
            </Button>
        </div>
    )
}

export default UserProfile