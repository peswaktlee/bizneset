import type { FC, ReactNode, SVGProps } from 'react'

const LocationIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={props?.strokeWidth || 1.5}
                d='M12 21.6s7.513-6.678 7.513-11.687a7.513 7.513 0 0 0-15.026 0C4.487 14.923 12 21.6 12 21.6Z'
            />

            <path
                stroke={props?.stroke || 'currentColor'}
                strokeWidth={props?.strokeWidth || 1.5}
                d='M14.4 9.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z'
            />
        </svg>
    )
}

export default LocationIcon