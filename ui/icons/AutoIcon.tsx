import type { FC, ReactNode, SVGProps } from 'react'

const AutoIcon: FC = (props: SVGProps<SVGSVGElement>): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}
        >
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='m21.602 7.698-2.134 2.134-1.6-3.947a2.134 2.134 0 0 0-1.978-1.387H8.16a2.134 2.134 0 0 0-2.03 1.34L4.531 9.833 2.398 7.698M6.666 14.1h.01m10.658 0h.01'
            />

            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M19.468 9.832H4.532a2.134 2.134 0 0 0-2.134 2.134v4.267c0 1.178.956 2.134 2.134 2.134h14.936a2.134 2.134 0 0 0 2.134-2.134v-4.267a2.134 2.134 0 0 0-2.134-2.134ZM4.531 18.367v2.134m14.936-2.134v2.134'
            />
        </svg>
    )
}

export default AutoIcon