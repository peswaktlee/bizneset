import type { FC, ReactNode, SVGProps } from 'react'

const TourismIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                stroke='url(#gradient-pro)'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M7.355 22.146V7.437m9.29 14.71V7.436m-8.516 0a3.87 3.87 0 1 1 7.741 0m3.097 0H5.032a3.097 3.097 0 0 0-3.096 3.097v8.516a3.097 3.097 0 0 0 3.096 3.096h13.935a3.096 3.096 0 0 0 3.097-3.096v-8.516a3.096 3.096 0 0 0-3.097-3.097Z'
            />

            <defs>
                <linearGradient id='gradient-pro' x1='0' y1='272.247' x2='-2.04416e-06' y2='537.247' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#FF8759'/>
                    <stop offset='0.255' stopColor='#FF457A'/>
                    <stop offset='0.605' stopColor='#9A2CD3'/>
                    <stop offset='1' stopColor='#3F51F5'/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default TourismIcon