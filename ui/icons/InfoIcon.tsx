import type { FC, ReactNode, SVGProps } from 'react'

const InfoIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M12 12V7.5m0 7.835v.04M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
        </svg>
    )
}

export default InfoIcon