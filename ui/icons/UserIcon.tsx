import type { FC, ReactNode, SVGProps } from 'react'

const UserIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={2}
                d='M2.4 20.513c0-3.776 3.154-6.836 9.6-6.836s9.6 3.06 9.6 6.836c0 .6-.438 1.087-.979 1.087H3.38c-.54 0-.98-.487-.98-1.087ZM15.6 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z'
            />
        </svg>
    )
}

export default UserIcon