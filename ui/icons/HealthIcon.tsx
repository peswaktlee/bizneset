import type { FC, ReactNode, SVGProps } from 'react'

const HealthIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M12 7.194c-1.73-3.92-5.76-4.23-7.64-2.56-1.53 1.33-2.26 4.66-.87 7.69 2.41 5.21 8.51 8 8.51 8s6.1-2.74 8.51-7.95c1.39-3 .66-6.32-.87-7.69-1.88-1.72-5.91-1.41-7.64 2.51Z'
            />

            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='M3.34 11.964H8l3 3 3-6 2 3h4.66'
            />
        </svg>
    )
}

export default HealthIcon