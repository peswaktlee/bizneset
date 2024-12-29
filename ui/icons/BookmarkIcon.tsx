import type { FC, ReactNode, SVGProps } from 'react'

const BookmarkIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={2}
                d='M11.726 20.229V5.417m0 14.812-1.458-1.458a4.387 4.387 0 0 0-3.103-1.285H3.496A1.096 1.096 0 0 1 2.4 16.389V4.869c0-.606.491-1.098 1.097-1.098h4.217c1.163 0 2.28.463 3.103 1.286l.909.909.908-.91a4.389 4.389 0 0 1 3.104-1.285h4.765c.606 0 1.097.492 1.097 1.098v11.52c0 .606-.491 1.097-1.097 1.097h-4.217c-1.164 0-2.28.462-3.103 1.285l-1.457 1.458Z'
            />
        </svg>
    )
}

export default BookmarkIcon