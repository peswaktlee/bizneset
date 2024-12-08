import type { FC, MouseEvent, ReactNode } from 'react'
import type { ButtonComponentProps } from '@/ts'

import { Tw, Link } from '@/data/constants'
import { LoadingIcon } from '@/ui/icons'

const Button: FC<ButtonComponentProps> = (props): ReactNode => {
    const {
        type,
        children,
        className,
        href,
        target,
        iconClassName,
        disabled,
        loading,
        element = 'button',
        onClick,
        icon,
        style,
        download,
        onEnter,
        id = null
    } = props

    const HandleClickLink = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event) event.currentTarget.blur()
        if (disabled) event.preventDefault()
        if (onClick) onClick()
    }

    const HandleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
        if (event) event.currentTarget.blur()
        if (disabled) event.preventDefault()
        if (onClick) onClick(event)
    }

    const Element = element === 'span' ? 'span' : 'button'

    if (href && target === '_blank') return (
        <a
            id={id || ''}
            tabIndex={-1}
            href={href}
            onClick={HandleClickLink}
            style={style}
            download={download ? 'true' : undefined}
            className={Tw(type === 'primary' ? 'select-none flex items-center gap-1.5 justify-center px-4 py-2 text-[14px] w-auto font-medium text-white bg-[#292929] hover:bg-zinc-700 rounded-full border-0 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:ring-0' : 'select-none flex items-center gap-1.5 justify-center w-full px-4 py-2 text-[14px] font-medium text-gray-500 bg-gray-50 rounded-full md:w-auto border-0 hover:bg-gray-100 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:ring-0', className)}
        >
            {loading && <LoadingIcon className={iconClassName || 'w-4 h-4'} />}
            {(icon && !loading) && icon}
            {children && children as ReactNode}
        </a>
    )

    if (href) return (
        <Link
            id={id || ''}
            tabIndex={-1}
            href={href}
            onClick={HandleClickLink}
            style={style}
            className={Tw(type === 'primary' ? 'select-none flex items-center gap-1.5 justify-center px-4 py-2 text-[14px] w-auto font-medium bg-[#292929] hover:bg-zinc-700 text-white rounded-full border-0 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:ring-0 focus:border-white' : 'select-none flex items-center gap-1.5 justify-center w-full px-4 py-2 text-[14px] font-medium text-gray-500 bg-gray-50 rounded-full md:w-auto border-0 hover:bg-gray-100 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:0', className)}
        >
            {loading && <LoadingIcon className={iconClassName || 'w-4 h-4'} />}
            {(icon && !loading) && icon}
            {children && children as ReactNode}
        </Link>
    )

    return (
        <Element
            id={id || ''}
            tabIndex={-1}
            disabled={disabled}
            onClick={HandleClickButton}
            style={style}
            className={Tw(type === 'primary' ? 'select-none flex items-center gap-1.5 justify-center px-4 py-2 text-[14px] w-auto  font-medium bg-[#292929] hover:bg-zinc-600 text-white rounded-full border-0 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:ring-2 focus:ring-offset-1 focus:ring-[#1a1a1a] focus:border-white' : type === 'secondary' ? 'select-none flex items-center gap-1.5 justify-center w-full px-4 py-2 text-[14px] font-medium text-gray-500 bg-gray-50 rounded-full md:w-auto border-0 hover:bg-gray-100 focus:outline-none outline-none transition-all ease-in-out duration-500 focus:ring-0' : 'select-none gap-1.5 whitespace-nowrap flex shadow-md items-center justify-center bg-white w-full py-[5px] px-1.5 text-[12px] text-black rounded-md outline-none border border-gray-50 hover:bg-[#f7f7f7] focus:outline-none font-medium transition-all ease-in-out duration-500', className)}
            onKeyDownCapture={(event) => {
                if (event.key === 'Enter' && onEnter) onEnter()
            }}
        >
            {loading && <LoadingIcon className={iconClassName || 'w-4 h-4'} />}
            {(icon && !loading) && icon}
            {children && children as ReactNode}
        </Element>
    )
}

export default Button