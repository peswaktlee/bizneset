import type { FC, ReactNode, SVGProps } from 'react'

const FinanceIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M12 18.535c-1.16.542-2.686.872-4.356.872-.93 0-1.813-.102-2.614-.285-1.379-.317-1.743-1.127-1.743-2.429V7.308c0-.858.906-1.447 1.743-1.256.801.183 1.685.285 2.614.285 1.67 0 3.195-.329 4.356-.871 1.16-.542 2.686-.871 4.356-.871.93 0 1.813.102 2.614.285 1.379.316 1.743 1.126 1.743 2.428v9.385c0 .859-.906 1.448-1.743 1.256a11.801 11.801 0 0 0-2.614-.285c-1.67 0-3.195.33-4.356.871Z'
            />

            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M6.336 12.872v.008m11.327-1.758v.009m-3.486.87a2.178 2.178 0 1 1-4.356 0 2.178 2.178 0 0 1 4.357 0Z'
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

export default FinanceIcon