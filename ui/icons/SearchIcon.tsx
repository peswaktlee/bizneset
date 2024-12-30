import type { FC, ReactNode, SVGProps } from 'react'

const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='m21 21-4.343-4.343m0 0A8 8 0 1 0 5.345 5.344a8 8 0 0 0 11.312 11.313Z'
            />
        </svg>
    )
}

export default SearchIcon