import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { useImage, usePath } from '@/hooks'
import { AuthState } from '@/data/states'
import { Button } from '@/ui/views'
import { ImageOnDrag } from '@/helpers/events'
import { AddIcon, UserIcon } from '@/ui/icons'
import { Translation } from '@/helpers/generals'
import { Link, PATHS } from '@/data/constants'

const UserProfile: FC = (): ReactNode => {
    const path = usePath()
    const isAdd = path === PATHS.ADD_BUSINESS

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
    } = useImage(User ? User?.Avatar : null)

    const styles = {
        overflow: 'hidden',
        display: (!loading && !error && !isEmpty) ? 'block' : 'none'
    }

    if (User && !Loading) return (
        <div className='w-full flex items-center z-10'>
            <Link 
                href={PATHS.ADD_BUSINESS} 
                className='flex items-center bg-gray-50/10 rounded-full mr-2 pl-1.5 pr-3 gap-1.5 hover:bg-gray-50/15 transition-bg ease-in-out duration-300'
            >
                <AddIcon className='text-white' />

                <p className='text-white font-medium text-sm'>
                    {Translation('add-your-business')}
                </p>
            </Link>

            {
                !isAdd &&
                <Button
                    type='secondary'
                    onClick={HandleUserModal}
                    className='relative text-sm flex items-center justify-center p-0 w-9 h-9 rounded-full bg-gray-50'
                    icon={<UserIcon width='18px' height='18px' className='text-gray-500' />}
                >
                    <img
                        style={styles}
                        className='w-full h-full p-[1px] rounded-full absolute top-0 left-0 object-cover bottom-0 right-0 z-10'
                        src={User?.Avatar || ''}
                        onLoad={() => setLoading(false)}
                        alt={User?.Name || Translation('user-avatar')}
                        onDragStart={ImageOnDrag}
                        onError={() => {
                            setError(true)
                            setLoading(false)
                        }}
                    />
                </Button>
            }
        </div>
    )
}

export default UserProfile