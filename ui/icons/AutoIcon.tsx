import type { FC, ReactNode, SVGProps } from 'react'

const AutoIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='m21.602 7.698-2.134 2.134-1.6-3.947a2.134 2.134 0 0 0-1.978-1.387H8.16a2.134 2.134 0 0 0-2.03 1.34L4.531 9.833 2.398 7.698M6.666 14.1h.01m10.658 0h.01'
            />

            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='M19.468 9.832H4.532a2.134 2.134 0 0 0-2.134 2.134v4.267c0 1.178.956 2.134 2.134 2.134h14.936a2.134 2.134 0 0 0 2.134-2.134v-4.267a2.134 2.134 0 0 0-2.134-2.134ZM4.531 18.367v2.134m14.936-2.134v2.134'
            />

            <defs>
                <linearGradient
                    id='gradient-icon'
                    x1={5}
                    x2={5}
                    y1={5.5}
                    y2={19.5}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FF8759' />
                    <stop offset={0.255} stopColor='#FF457A' />
                    <stop offset={0.605} stopColor='#9A2CD3' />
                    <stop offset={1} stopColor='#3F51F5' />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default AutoIcon