import type { FC, ReactNode, SVGProps } from 'react'

const UploadIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='m6.375 21 9.563-9 4.5 4.5M6.374 21h11.25A3.375 3.375 0 0 0 21 17.625V12M6.375 21A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3h7.313M16.5 5.29 18.8 3m0 0L21 5.186M18.8 3v5.625m-9.05-.563a1.688 1.688 0 1 1-3.375 0 1.688 1.688 0 0 1 3.375 0Z'
            />
        </svg>
    )
}

export default UploadIcon