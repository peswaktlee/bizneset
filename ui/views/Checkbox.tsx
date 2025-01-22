import type { FC, ReactNode } from 'react'
import type { CheckboxComponentProps } from '@/ts'

import { Classes, Translation } from '@/helpers/generals'

const Checkbox: FC<CheckboxComponentProps> = (props): ReactNode => {
    const {
        id,
        label,
        message,
        value,
        disabled,
        onClick,
        className
    } = props

    return (
        <div onClick={disabled ? () => {} : onClick} className={Classes('select-none sm:col-span-2', className)} style={disabled ? { opacity: '0.75', pointerEvents: 'none' } : { opacity: '1', pointerEvents: 'auto' }}>
            {
                label &&
                <label htmlFor={id} className='select-none block mb-1 text-[13px] font-medium text-gray-500'>
                    {label}
                </label>
            }

            <div className={'flex gap-.5 items-center hover:opacity-90 transition-all ease-in-out duration-500'}>
                <input
                    id={id}
                    type='checkbox'
                    checked={value}
                    autoCorrect='off'
                    disabled={disabled}
                    readOnly
                    autoCapitalize='off'
                    autoComplete='off'
                    className='w-4 h-4 text-[#B5D4FF] bg-gray-100 border-gray-200 rounded focus:ring-0 focus:ring-transparent cursor-pointer'
                />

                <span className='ms-2 text-sm font-medium cursor-pointer text-gray-400 dark:text-gray-500'>
                    {Translation(message)}
                </span>
            </div>
        </div>
    )
}

export default Checkbox