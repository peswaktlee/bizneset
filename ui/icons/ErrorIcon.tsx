import type { FC, ReactNode, SVGProps } from 'react'

const ErrorIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={2}
                d='M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
            />
            
            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeWidth={2}
                d='M13 7.5 7.5 13m5.5 0L7.5 7.5'
            />
        </svg>
    )
}

export default ErrorIcon