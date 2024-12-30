import type { FC, ReactNode, SVGProps } from 'react'

const EyeIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M14.4 12.029c0 1.29-1.074 2.335-2.4 2.335-1.325 0-2.4-1.045-2.4-2.335s1.075-2.335 2.4-2.335c1.326 0 2.4 1.045 2.4 2.335Z'
            />
        </svg>
    )
}

export default EyeIcon