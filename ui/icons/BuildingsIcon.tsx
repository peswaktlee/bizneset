import type { FC, ReactNode, SVGProps } from 'react'

const BuildingsIcon: FC = (props: SVGProps<SVGSVGElement>): ReactNode => {
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
                d='M13 21v-7L8 9l-5 5v7h5m5 0H8m5 0h8V4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v6M8 21v-4m5-10v.01M17 7v.01M17 11v.01M17 15v.01'
            />
        </svg>
    )
}

export default BuildingsIcon