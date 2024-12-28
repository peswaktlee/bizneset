import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.width}
        height={props.height}
        viewBox='0 0 1176 1176'
        fill='none'
        {...props}
    >
        <circle
            cx={587.894}
            cy={587.894}
            r={494.394}
            stroke='url(#a)'
            strokeWidth={187}
        />
        <defs>
            <linearGradient
                id='a'
                x1={0}
                x2={1175.79}
                y1={587.894}
                y2={587.894}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='#FF8759' />
                <stop offset={0.255} stopColor='#FF457A' />
                <stop offset={0.605} stopColor='#9A2CD3' />
                <stop offset={1} stopColor='#3F51F5' />
            </linearGradient>
        </defs>
    </svg>
)
export default SvgComponent
