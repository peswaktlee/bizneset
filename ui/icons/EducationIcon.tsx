import type { FC, ReactNode, SVGProps } from 'react'

const EducationIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M18.75 9.75V17L12 19.5 5.25 17V9.75M21 8.25 12 4.5 3 8.25l9 4.5 9-4.5Zm0 0V15'
            />
        </svg>
    )
}

export default EducationIcon