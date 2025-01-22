import type { FC, ReactNode, SVGProps } from 'react'

const WarningIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M12 12.9V8.414m0 7.81v.04M17.67 20H6.33a3.398 3.398 0 0 1-3.267-2.424c-.176-.598.04-1.22.37-1.751L9.103 5.6c1.328-2.135 4.466-2.135 5.794 0l5.67 10.224c.33.53.546 1.153.37 1.75A3.398 3.398 0 0 1 17.67 20Z'
            />
        </svg>
    )
}

export default WarningIcon