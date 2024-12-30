import type { FC, ReactNode, SVGProps } from 'react'

const BugIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactNode => {
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
                fill={props?.fill || 'currentColor'}
                d='M9.12 9.12v-1a1 1 0 0 0-1 1h1Zm.096 0h1a1 1 0 0 0-1-1v1Zm5.664 0v-1a1 1 0 0 0-1 1h1Zm.085 0h1a1 1 0 0 0-1-1v1Zm-5.75.077v1a1 1 0 0 0 1-1h-1Zm-.095 0h-1a1 1 0 0 0 1 1v-1Zm5.845 0v1a1 1 0 0 0 1-1h-1Zm-.085 0h-1a1 1 0 0 0 1 1v-1ZM8.672 13.92a1 1 0 0 0 0 2v-2Zm6.656 2a1 1 0 1 0 0-2v2ZM20.6 12a8.6 8.6 0 0 1-8.6 8.6v2c5.854 0 10.6-4.745 10.6-10.6h-2ZM12 20.6A8.6 8.6 0 0 1 3.4 12h-2c0 5.855 4.746 10.6 10.6 10.6v-2ZM3.4 12A8.6 8.6 0 0 1 12 3.4v-2C6.146 1.4 1.4 6.146 1.4 12h2ZM12 3.4a8.6 8.6 0 0 1 8.6 8.6h2c0-5.854-4.746-10.6-10.6-10.6v2Zm-2.88 6.72h.096v-2H9.12v2Zm5.76 0h.085v-2h-.085v2Zm-6.664-1v.077h2V9.12h-2Zm1-.923H9.12v2h.096v-2Zm.904 1V9.12h-2v.077h2Zm3.845-.077v.077h2V9.12h-2Zm1-.923h-.085v2h.085v-2Zm.915 1V9.12h-2v.077h2Zm-.552 4.723H8.672v2h6.656v-2Z'
            />
        </svg>
    )
}

export default BugIcon