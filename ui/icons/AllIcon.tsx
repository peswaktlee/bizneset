import type { FC, ReactNode, SVGProps } from 'react'

const AllIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                strokeWidth={1.5}
                d='m7.5 14.462-3.877 1.74c-.825.374-.825.988 0 1.363l6.937 3.165c.792.36 2.095.36 2.887 0l6.937-3.165c.825-.375.825-.989 0-1.364l-3.747-1.803m3.744-7.946L13.379 3.26c-.759-.347-2-.347-2.76 0L3.623 6.452c-.825.375-.825.989 0 1.364l6.937 3.164c.792.36 2.095.36 2.887 0l6.937-3.164c.822-.375.822-.99-.003-1.364Z'
            />
            
            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='m7.5 9.585-3.881 1.742c-.825.375-.825.989 0 1.364l6.937 3.163c.792.361 2.095.361 2.887 0l6.937-3.163c.83-.375.83-.99.005-1.364L16.5 9.585'
            />

            <defs>
                <linearGradient id='gradient-pro' x1='0' y1='272.247' x2='-2.04416e-06' y2='537.247' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#FF8759'/>
                    <stop offset='0.255' stopColor='#FF457A'/>
                    <stop offset='0.605' stopColor='#9A2CD3'/>
                    <stop offset='1' stopColor='#3F51F5'/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default AllIcon