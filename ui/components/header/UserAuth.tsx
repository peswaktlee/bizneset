import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { useShallow } from 'zustand/react/shallow'
import { AuthState } from '@/data/states'
import { AuthInvoke } from '@/actions/users'
import { Translation } from '@/helpers/generals'
import { GoogleIcon, LoadingIcon } from '@/ui/icons'
import { DISABLED_STYLES } from '@/data/constants'

const UserAuth: FC = (): ReactNode => {
    const { push } = useRouter()

    const {
        User,
        Loading,
        SmallLoading
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                SmallLoading: state.SmallLoading
            }
        })
    )

    if (User === false && !Loading && !SmallLoading) return (
        <div className='w-full flex items-center'>
            <button 
                className='bg-white flex items-center gap-2.5 pl-2.5 pr-3 py-[7px] rounded-full transition-all hover:opacity-85 duration-500'
                onClick={() => (!SmallLoading && !Loading) && AuthInvoke(push)}
                style={(SmallLoading || Loading) ? DISABLED_STYLES : {}}
            >
                {(SmallLoading || Loading) && <LoadingIcon className='w-[20px] h-[20px] text-black' />}
                {(!SmallLoading && !Loading) && <GoogleIcon size='20' />}
                                
                <b className='font-medium text-sm text-gray-900'>
                    {Translation('auth-with-google')}
                </b>
            </button>
        </div>
    )
}

export default UserAuth