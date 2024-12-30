import type { FC, ReactNode, SVGProps } from 'react'

const FolderIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M2.4 8.416v9.525a2 2 0 0 0 2 2h15.2a2 2 0 0 0 2-2V8.012a1 1 0 0 0-1-1h-8.516L9.319 4.06H3.4a1 1 0 0 0-1 1v3.357Z'
            />
        </svg>
    )
}

export default FolderIcon