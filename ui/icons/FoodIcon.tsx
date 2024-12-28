import type { FC, ReactNode, SVGProps } from 'react'

const FoodIcon: FC = (props: SVGProps<SVGSVGElement>): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}
        >
            <g
                stroke='#000'
                strokeLinejoin='round'
                strokeWidth={1.5}
                clipPath='url(#a)'
            >
                <path d='m2.696 2.238 17.27 17.27a1.748 1.748 0 0 1-2.471 2.472l-4.22-4.292a1.5 1.5 0 0 1-.43-1.051v-.26a1.5 1.5 0 0 0-.447-1.067l-.544-.503a1.5 1.5 0 0 0-1.397-.349 2.274 2.274 0 0 1-2.183-.592L4.27 9.861C1.894 7.485 1.02 3.898 2.696 2.238Z' />
                <path
                    strokeLinecap='round'
                    d='m18.75 1.5-3.621 3.621a3 3 0 0 0-.88 2.122v.696a.75.75 0 0 1-.22.53L13.5 9m1.5 1.5.53-.53a.749.749 0 0 1 .531-.22h.697a3 3 0 0 0 2.121-.879L22.5 5.25m-1.875-1.875-3.75 3.75m-7.5 10.125L4.7 21.95A1.875 1.875 0 0 1 2.05 19.3l3.95-3.925'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    )
}

export default FoodIcon