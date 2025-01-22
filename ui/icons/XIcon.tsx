import type { FC, ReactNode, SVGProps } from 'react'

const XIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={props?.strokeWidth || 1.5}
                d='M18 6 6 18m12 0L6 6'
            />
        </svg>
    )
}

export default XIcon