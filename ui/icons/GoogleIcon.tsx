import type { FC, ReactNode } from 'react'
import type { IconComponentProps } from '@/ts'

const GoogleIcon: FC<IconComponentProps> = (props): ReactNode => {
    const { size } = props

    return (
        <svg
            width={size || '24'}
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <mask
                id='mask0_1_3'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='2'
                y='2'
                width='43'
                height='44'
            >
                <path
                    
                    d='M44.5 20H24V28.5H35.8C34.7 33.9 30.1 37 24 37C16.8 37 11 31.2 11 24C11 16.8 16.8 11 24 11C27.1 11 29.9 12.1 32.1 13.9L38.5 7.5C34.6 4.1 29.6 2 24 2C11.8 2 2 11.8 2 24C2 36.2 11.8 46 24 46C35 46 45 38 45 24C45 22.7 44.8 21.3 44.5 20Z'
                    fill='white'
                />
            </mask>

            <g mask='url(#mask0_1_3)' >
                <path d='M0 37V11L17 24L0 37Z' fill='white'  />
            </g>

            <mask
                id='mask1_1_3'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='2'
                y='2'
                width='43'
                height='44'
                
            >
                <path
                    d='M44.5 20H24V28.5H35.8C34.7 33.9 30.1 37 24 37C16.8 37 11 31.2 11 24C11 16.8 16.8 11 24 11C27.1 11 29.9 12.1 32.1 13.9L38.5 7.5C34.6 4.1 29.6 2 24 2C11.8 2 2 11.8 2 24C2 36.2 11.8 46 24 46C35 46 45 38 45 24C45 22.7 44.8 21.3 44.5 20Z'
                    fill='white'
                />
            </mask>

            <g mask='url(#mask1_1_3)' >
                <path d='M0 11L17 24L24 17.9L48 14V0H0V11Z' fill='white'  />
            </g>

            <mask
                id='mask2_1_3'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='2'
                y='2'
                width='43'
                height='44'
            >
                <path
                    d='M44.5 20H24V28.5H35.8C34.7 33.9 30.1 37 24 37C16.8 37 11 31.2 11 24C11 16.8 16.8 11 24 11C27.1 11 29.9 12.1 32.1 13.9L38.5 7.5C34.6 4.1 29.6 2 24 2C11.8 2 2 11.8 2 24C2 36.2 11.8 46 24 46C35 46 45 38 45 24C45 22.7 44.8 21.3 44.5 20Z'
                    fill='white'
                    
                />
            </mask>

            <g mask='url(#mask2_1_3)' >
                <path d='M0 37L30 14L37.9 15L48 0V48H0V37Z' fill='white'  />
            </g>

            <mask
                id='mask3_1_3'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='2'
                y='2'
                width='43'
                height='44'
            >
                <path
                    d='M44.5 20H24V28.5H35.8C34.7 33.9 30.1 37 24 37C16.8 37 11 31.2 11 24C11 16.8 16.8 11 24 11C27.1 11 29.9 12.1 32.1 13.9L38.5 7.5C34.6 4.1 29.6 2 24 2C11.8 2 2 11.8 2 24C2 36.2 11.8 46 24 46C35 46 45 38 45 24C45 22.7 44.8 21.3 44.5 20Z'
                    fill='white'
                    
                />
            </mask>

            <g mask='url(#mask3_1_3)' >
                <path d='M48 48L17 24L13 21L48 11V48Z' fill='white'  />
            </g>
        </svg>
    )
}

export default GoogleIcon
