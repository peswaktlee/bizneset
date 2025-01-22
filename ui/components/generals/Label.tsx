import type { FC, ReactNode } from 'react'
import type { LabelProps } from '@/ts'

const Label: FC<LabelProps> = (props): ReactNode => {
    const { label, required } = props

    if (label) return (
        <label htmlFor={label.replace(/ /g, '-').toLowerCase()} className='block text-[13px] font-medium text-[var(--accent-label)] ml-[2px] mb-[2px]'>
            {label}

            <span className='text-red-900 ml-1 text-[12px]'>
                {required && '*'}
            </span>
        </label>
    )
}

export default Label