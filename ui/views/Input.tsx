import type { FC, ReactNode } from 'react'
import type { InputComponentProps } from '@/ts'

import { Classes, CreateValidationObject } from '@/helpers/generals'

const Input: FC<InputComponentProps> = (props): ReactNode => {
    const {
        id,
        label,
        placeholder,
        value,
        required,
        onChange,
        max,
        showError,
        isError,
        onKeyDown,
        disabled,
        containerClassName,
        labelClassname,
        inputClassName,
        showDisabled = true,
        hideMax = false,
        icon
    } = props

    const error = isError ? isError : CreateValidationObject()

    return (
        <div className={Classes('select-none sm:col-span-2', containerClassName)} style={disabled ? { opacity: showDisabled ? '0.4' : '1.0', pointerEvents: 'none' } : { opacity: '1', pointerEvents: 'auto' }}>
            {
                label &&
                <label htmlFor={id} className={Classes('select-none flex items-center gap-1 mb-1 text-[12px] font-medium text-gray-500', labelClassname)}>
                    { icon && icon }
                    
                    {label}

                    {
                        required && 
                        <span className='text-red-400 ml-1 text-[12px]'>
                            *
                        </span>
                    }
                </label>
            }

            <input
                id={id}
                type='text'
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                spellCheck='false'
                maxLength={max}
                value={value}
                disabled={disabled || !onChange}
                onChange={onChange}
                placeholder={placeholder}
                onKeyDown={onKeyDown ? onKeyDown : undefined}
                className={Classes(`bg-gray-50 border border-gray-100 text-gray-[#666] text-[13px] px-3 py-2 rounded-full block w-full focus:ring-2 outline-none focus:outline-none focus:ring-[#B5D4FF] focus:border-white transition-all duration-500 ease-in-out ${disabled || !onChange ? 'opacity-50 cursor-not-allowed' : ''}`, inputClassName)}
            />

            { 
                !hideMax && typeof max === 'number' &&
                <div className='flex items-center justify-end'>
                    <p className='text-gray-400 text-[11px] mt-1'>
                        {value?.length} / {max}
                    </p>
                </div> 
            }

            {
                isError && error &&
                <p style={error?.error && showError ? { opacity: '1' } : { opacity: '0' }} className='text-xs h-6 mt-1 ml-[2px] text-red-400 transition-all duration-500 ease-in-out'>
                    {error?.message}
                </p>
            }
        </div>
    )
}

export default Input