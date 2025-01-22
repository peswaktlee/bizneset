import type { FC, ReactNode, SVGProps } from 'react'
    
const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={18}
            fill='none'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='M8.78 4.1H5.076c-.562 0-1.1.22-1.498.615-.397.394-.62.928-.62 1.485v12.6c0 .557.223 1.09.62 1.485.397.393.936.615 1.498.615H8.78m.263-8.4h12m0 0-4.585-4.8m4.585 4.8-4.585 4.8'
            />
        </svg>
    )
}
    
export default LogoutIcon