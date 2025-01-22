import type { FC, ReactNode, SVGProps } from 'react'

const MapIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='m3.23 5.667 15.2 14.84M3.23 5.666A3.12 3.12 0 0 1 5.582 4.61h5.139M3.229 5.667A2.91 2.91 0 0 0 2.5 7.592V18.52c0 1.646 1.38 2.98 3.083 2.98h11.305c1.703 0 3.083-1.334 3.083-2.98v-4.471m-9.25 0-6.68 6.457M18.007 5.878v-.064m3.494-.01c0 2.203-3.494 5.14-3.494 5.14s-3.495-2.937-3.495-5.14c0-1.825 1.565-3.304 3.495-3.304 1.93 0 3.494 1.48 3.494 3.304Z'
            />
        </svg>
    )
}

export default MapIcon