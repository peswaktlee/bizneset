import type { FC, MouseEvent, ReactNode } from 'react'
import type { ListType, SelectComponentProps, ValidationFunctionObjectReturnTypes } from '@/ts'

import { useEffect } from 'react'
import { useOpen } from '@/hooks'
import { AccordionBottomIcon, SuccessIcon } from '@/ui/icons'
import { ACTIVE_INPUT_ELEMENTS, KEYSTROKES } from '@/data/constants'

const Select: FC<SelectComponentProps> = (props): ReactNode => {
    const {
        id,
        label,
        placeholder,
        value,
        required,
        onChange,
        showError,
        list,
        validationFunction,
        idAccessor,
        valueAccessor,
        disabled,
        classes,
        iframeId
    } = props

    const { 
        open, 
        setOpen, 
        ref 
    } = useOpen()

    useEffect(() => {
        if (iframeId) {
            const iframe = document.getElementById(iframeId) as HTMLIFrameElement

            const handleIframeLoad = () => {
                if (iframe && iframe.contentWindow) iframe.contentWindow.addEventListener(
                    'click', 
                    handleClick
                )
            }

            const handleClick = (): void => {
                setOpen(false)
            }

            if (iframe) iframe.addEventListener('load', handleIframeLoad)

            return () => {
                if (iframe) iframe.removeEventListener('load', handleIframeLoad)
                if (iframe && iframe.contentWindow) iframe.contentWindow.removeEventListener('click', handleClick)
            }
        }

        return () => {}
    }, [iframeId])

    const validation: ValidationFunctionObjectReturnTypes | false = validationFunction ? validationFunction(value || '') : false

    return (
        <div 
            // @ts-ignore
            ref={ref} 
            className='select-none sm:col-span-2 w-full' style={disabled ? { opacity: '0.75', pointerEvents: 'none' } : { opacity: '1', pointerEvents: 'auto' }}
            onKeyDown={(event) => {
                const activeElementTag = document.activeElement?.tagName
                const isInput = activeElementTag ? ACTIVE_INPUT_ELEMENTS.includes(activeElementTag) : false

                if (event?.key === KEYSTROKES.ESCAPE && !isInput) setOpen(false)
            }}
        >
            {
                label !== '' &&
                <label className='select-none block mb-1 text-[13px] font-medium text-gray-500'>
                    {label}

                    {
                        required && 
                        <span className='text-red-400 ml-1 text-[12px]'>
                            *
                        </span>
                    }
                </label>
            }

            <div className='relative'>
                <button
                    id={id}
                    className={`bg-gray-50 flex justify-between border border-gray-100 text-gray-800 text-sm rounded-full focus:ring-2 focus:ring-[#B5D4FF] focus:border-white ease-in-out duration-500 gap-2 transition-all w-full ${classes ? classes : label !== '' ? 'p-2.5' : 'p-2 min-w-[175px] max-w-[200px]'} ${disabled ? 'cursor-default opacity-50' : 'cursor-pointer'}`}
                    onClick={() => setOpen(!open)}
                >
                    <div>
                        { 
                            label !== '' && 
                            value?.trim() === '' &&
                            <span className='text-gray-400'>
                                {placeholder}
                            </span>
                        }

                        { 
                            label === '' && 
                            value?.trim() === '' &&
                            <span>
                                {/* @ts-ignore */}
                                {list?.find((item: ListType) => item[idAccessor] === value)?.[valueAccessor]}
                            </span>
                        }

                        { 
                            value?.trim() !== '' &&
                            <span>
                                {/* @ts-ignore */}
                                {list?.find((item: ListType) => item[idAccessor] === value)?.[valueAccessor]}
                            </span>
                        }
                    </div>

                    <AccordionBottomIcon strokeWidth={2} className='w-[18px] h-[18px] text-gray-400' />
                </button>

                {
                    !disabled && 
                    open &&
                    <div className='absolute border h-auto max-h-[224px] overflow-scroll scrollbar-hidden w-full top-12 right-0 rounded-lg border-gray-100 z-50 text-base bg-gray-50 divide-y divide-gray-100'>
                        {
                            list?.map((item: ListType) => {
                                const isFirst = list?.indexOf(item) === 0
                                const isLast = list?.indexOf(item) === list.length - 1

                                return (
                                    <div 
                                        key={item[idAccessor as '_id']} 
                                        className={`text-gray-500 justify-between font-normal cursor-pointer flex items-center py-1.5 px-2 text-[14px] hover:bg-gray-100 transition-all ease-in-out duration-500 ${isLast && isFirst ? 'rounded-md' : isLast && !isFirst ? 'rounded-b-md' : !isLast && isFirst ? 'rounded-t-md' : 'rounded-none'}`}
                                        onClick={(e: MouseEvent<HTMLDivElement>) => {
                                            {/* @ts-ignore */}
                                            onChange(item[idAccessor], e)
                                            setOpen(false)
                                        }}
                                    >
                                        <span className='flex items-center gap-2'>
                                            {/* @ts-ignore */}
                                            {item[valueAccessor]}
                                        </span>

                                        <span>
                                            {item[idAccessor as '_id'] === value && <SuccessIcon strokeWidth={2} className='w-4 h-4 text-gray-400' />}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>

            {
                label !== '' && typeof validationFunction === 'function' && validation &&
                <p style={validation?.error && showError ? { opacity: '1' } : { opacity: '0' }} className='text-xs h-6 mt-[2px] ml-[2px] text-red-500 transition-all duration-500 ease-in-out'>
                    {validation?.message}
                </p>
            }
        </div>
    )
}

export default Select