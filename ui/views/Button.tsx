import type { FC, MouseEvent, ReactNode } from 'react'
import type { ButtonComponentProps } from '@/ts'

import { LoadingIcon } from '@/ui/icons'
import { BUTTON_TYPES, Link, Tw } from '@/data/constants'

const Button: FC<ButtonComponentProps> = (props): ReactNode => {
    const {
        type = BUTTON_TYPES.PRIMARY,
        children,
        className,
        href,
        tabIndex,
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

    const HandleButtonClass = () => {
        let className = ' h-full flex gap-2 items-center rounded-full p-2 px-3 transition-bg duration-300 ease-in-out py-[5px] font-medium text-md focus:ring-2 focus:ring-[#B5D4FF] focus:border-white focus:border-none border-0 focus:ring-offset-1 focus:outline-none outline-none transition-all'

        if (type === BUTTON_TYPES.PRIMARY) className = className + ' border-[var(--primary-bg)] bg-[var(--primary-bg)] hover:bg-[var(--primary-bg-hover)] hover:border-[var(--primary-bg-hover)] text-white focus:ring-[#B5D4FF] focus:border-white'
        if (type === BUTTON_TYPES.SECONDARY) className = className + ' text-gray-500 bg-gray-50 hover:bg-gray-100'
        if (type === BUTTON_TYPES.ACTION) className = className + ' bg-white w-auto shadow-md text-[12px] text-black border border-gray-50 hover:bg-[#f7f7f7]'

        return className
    }

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
            tabIndex={tabIndex || loading || disabled ? -1 : 0}
            href={href}
            onClick={HandleClickLink}
            style={style}
            download={download ? 'true' : undefined}
            className={Tw(HandleButtonClass(), className)}
        >
            {loading && <LoadingIcon className={iconClassName || 'w-4 h-4'} />}
            {(icon && !loading) && icon}
            {children && children as ReactNode}
        </a>
    )

    if (href) return (
        <Link
            id={id || ''}
            tabIndex={tabIndex || loading || disabled ? -1 : 0}
            href={href}
            onClick={HandleClickLink}
            style={style}
            className={Tw(HandleButtonClass(), className)}
        >
            {loading && <LoadingIcon className={iconClassName || 'w-4 h-4'} />}
            {(icon && !loading) && icon}
            {children && children as ReactNode}
        </Link>
    )

    return (
        <Element
            id={id || ''}
            tabIndex={tabIndex || loading || disabled ? -1 : 0}
            disabled={disabled}
            onClick={HandleClickButton}
            style={style}
            className={Tw(HandleButtonClass(), className)}
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