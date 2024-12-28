import type { FC, ReactNode, SVGProps } from 'react'

const TourismIcon: FC = (props: SVGProps<SVGSVGElement>): ReactNode => {
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
                d='M7.355 22.146V7.437m9.29 14.71V7.436m-8.516 0a3.87 3.87 0 1 1 7.741 0m3.097 0H5.032a3.097 3.097 0 0 0-3.096 3.097v8.516a3.097 3.097 0 0 0 3.096 3.096h13.935a3.096 3.096 0 0 0 3.097-3.096v-8.516a3.096 3.096 0 0 0-3.097-3.097Z'
            />
        </svg>
    )
}

export default TourismIcon