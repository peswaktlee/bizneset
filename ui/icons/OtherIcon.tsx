import type { FC, ReactNode, SVGProps } from 'react'

const OtherIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'
            />

            <path
                fill={props?.stroke || 'currentColor'}
                fillRule='evenodd'
                d='M16.396 10.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm-4.398 0a1.1 1.1 0 1 0 0 2.199 1.1 1.1 0 0 0 0-2.199ZM6.5 12a1.1 1.1 0 1 1 2.2 0 1.1 1.1 0 0 1-2.2 0Z'
                clipRule='evenodd'
            />
        </svg>
    )
}

export default OtherIcon