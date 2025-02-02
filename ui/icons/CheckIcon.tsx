import type { FC, ReactNode, SVGProps } from 'react'

const CheckIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m16.8 8.4-7.16 7.2-2.44-2.454'
            />
        </svg>
    )
}

export default CheckIcon