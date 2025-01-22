import type { FC, ReactNode, SVGProps } from 'react'

const SuccessIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='m15.142 9.983-4.267 4.267-1.455-1.454M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z'
            />
        </svg>
    )
}

export default SuccessIcon