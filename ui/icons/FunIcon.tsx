import type { FC, ReactNode, SVGProps } from 'react'

const FunIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                d='M12 7V5a1 1 0 0 1 1-1 1 1 0 0 0 1-1V2m-4 14-1.5-1.5m0 0L7 13m1.5 1.5L7 16m1.5-1.5L10 13m7 2.5v-2m-15 1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 7 6.212 7 9.5 7h5c3.288 0 4.931 0 6.038.908.202.166.388.352.554.554C22 9.57 22 11.212 22 14.5c0 3.288 0 4.931-.908 6.038a3.995 3.995 0 0 1-.554.554C19.43 22 17.788 22 14.5 22h-5c-3.287 0-4.931 0-6.038-.908a3.998 3.998 0 0 1-.554-.554C2 19.43 2 17.788 2 14.5Z'
            />
        </svg>
    )
}

export default FunIcon