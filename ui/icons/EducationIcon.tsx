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
                strokeWidth={1.5}
                d='M18.75 9.75V17L12 19.5 5.25 17V9.75M21 8.25 12 4.5 3 8.25l9 4.5 9-4.5Zm0 0V15'
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

export default EducationIcon