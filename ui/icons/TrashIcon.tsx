import type { FC, ReactNode, SVGProps } from 'react'

const TrashIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M4 6.176h16M9 3h6m.5 18h-7c-1.105 0-2-.948-2-2.118L6.043 7.28c-.023-.601.43-1.103 1-1.103h9.915c.568 0 1.022.502.999 1.103L17.5 18.882c0 1.17-.895 2.118-2 2.118Z'
            />
        </svg>
    )
}

export default TrashIcon