import type { FC, ReactNode, SVGProps } from 'react'

const AddIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            {...props}
        >
            <path fill={props?.stroke || 'currentColor'} d='M11 13.5H5v-2h6v-6h2v6h6v2h-6v6h-2v-6Z' />
        </svg>
    )
}

export default AddIcon