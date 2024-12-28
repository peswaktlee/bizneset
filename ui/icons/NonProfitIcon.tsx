import type { FC, ReactNode, SVGProps } from 'react'

const NonProfitIcon: FC = (props: SVGProps<SVGSVGElement>): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}
        >
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M3 21h18M9 8h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16'
            />
        </svg> 
    )
}

export default NonProfitIcon