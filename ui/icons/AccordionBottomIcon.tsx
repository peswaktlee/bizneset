import type { FC, ReactNode, SVGProps } from 'react'

const AccordionBottomIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
            fill='none'
            {...props}
        >
            <path
                stroke={props?.stroke || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={props?.strokeWidth || 1.5}
                d='m15 7.5-5 5-5-5'
            />
        </svg>
    )
}

export default AccordionBottomIcon