import type { FC, ReactNode, SVGProps } from 'react'

const TechIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='m5 16 5-3m4-2 5-3m-7-3v5m0 4v5M5 8l5 3m4 2 5 3m1.5-7v5.5m-7 6 5.5-3m-14.5 0 6 3m-7-5.5V9m1-2.5 6-3m9 3-6-3M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 9.75l2 1.125v2.25l-2 1.125-2-1.125v-2.25l2-1.125Z'
            />
        </svg>
    )
}

export default TechIcon