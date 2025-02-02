import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { useShallow } from 'zustand/react/shallow'
import { GoogleIcon, LoadingIcon, LogoIcon } from '@/ui/icons'
import { Translation } from '@/helpers/generals'
import { AuthInvoke, UserLogout } from '@/actions/users'
import { AuthState } from '@/data/states'
import { NormalLayout } from '@/ui/layouts'
import { SEO } from '@/ui/tools'
import { DISABLED_STYLES } from '@/data/constants'

const Auth: FC = (): ReactNode => {
    const { push } = useRouter()

    const { 
        User, 
        Loading, 
        AuthModal,
        SmallLoading 
    } = AuthState(
        useShallow(state => {
            return {
                User: state.User,
                Loading: state.Loading,
                AuthModal: state.AuthModal,
                SmallLoading: state.SmallLoading
            }
        })
    )

    if (AuthModal) return (
        <NormalLayout>
            {
                (User && !Loading) &&
                <button className='bg-white absolute top-4 right-4 flex items-center gap-1.5 px-2.5 mt-1 py-[7px] rounded-full transition-all hover:opacity-85 duration-500 pointer-events-auto z-[999]' onClick={UserLogout}>
                    <svg width='18' height='18' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8.78056 4.09961H5.07468C4.51304 4.09961 3.97441 4.32086 3.57728 4.71468C3.18014 5.10851 2.95703 5.64265 2.95703 6.19961V18.7996C2.95703 19.3566 3.18014 19.8907 3.57728 20.2845C3.97441 20.6784 4.51304 20.8996 5.07468 20.8996H8.78056M9.04375 12.4996H21.0438M21.0438 12.4996L16.4586 7.69961M21.0438 12.4996L16.4586 17.2996' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>


                    <b className='font-medium text-sm text-gray-900'>
                        {Translation('logout')} 
                    </b>
                </button>
            }

            <div className='w-full h-full flex items-center justify-center relative'>
                <SEO title={Translation('join-the-waitlist')} />

                <div className='fixed w-full h-full top-0 right-0 left-0 bottom-0 opacity-15 bg-[url(/images/noise.png)] bg-center z-[10000] overflow-hidden pointer-events-none'></div>

                <div className='max-w-[700px] p-10 lg:p-0 z-10'>
                    <div className='ml-1'>
                        <LogoIcon className='w-[150px] 2xl:w-[180px]' color='#fff' />
                    </div>

                    <h1 className='text-[22px] lg:text-4xl text-white font-medium mt-4 md:mt-7 ml-1 mb-0.5'>
                        {Translation('join-waitlist')}
                    </h1>

                    <div className='flex justify-start items-center mt-5'>
                        {
                            !User &&
                            <button 
                                className='bg-white flex items-center gap-2.5 pl-2.5 pr-3 py-[7px] rounded-full transition-all hover:opacity-85 duration-500'
                                onClick={() => (!SmallLoading && !Loading) && AuthInvoke(push)}
                                style={(SmallLoading || Loading) ? DISABLED_STYLES : {}}
                            >
                                {
                                    (SmallLoading || Loading) && <LoadingIcon className='w-[20px] h-[20px]' />
                                }

                                {
                                    (!SmallLoading && !Loading) &&
                                    <GoogleIcon size='22' />
                                }
                                
                                <b className='font-medium text-sm text-gray-900'>
                                    {Translation('auth-with-google')}
                                </b>
                            </button>
                        }

                        {
                            (User && !Loading) &&
                            <div className='flex justify-start items-start flex-col gap-2.5'>
                                <div className='flex items-center gap-2 mb-1'>
                                    <svg width='24' viewBox='0 0 61 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <circle cx='30.3857' cy='31.0009' r='26.5871' stroke='url(#paint0_linear_414_8111)' stroke-width='3.03853'/>
                                        <path d='M19.8281 30.1561L27.4289 37.7569L43.9778 21.209' stroke='white' stroke-width='3.03853'/>
                                        
                                        <defs>
                                            <linearGradient id='paint0_linear_414_8111' x1='2.2793' y1='2.89453' x2='2.2793' y2='59.1073' gradientUnits='userSpaceOnUse'>
                                                <stop stopColor='#FF8759'/>
                                                <stop offset='0.255' stopColor='#FF457A'/>
                                                <stop offset='0.605' stopColor='#9A2CD3'/>
                                                <stop offset='1' stopColor='#3F51F5'/>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <p className='text-white'>
                                        {Translation('you-are-in-waitlist')}
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Auth