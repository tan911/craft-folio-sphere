import { type ReactNode } from 'react'
import clsx from 'clsx'

type ButtonProps = {
    mode: 'brand' | 'success' | 'error'
    size: 'base' | 'small' | 'medium'
    isIcon: boolean
    text: string
    classes?: string
    children?: ReactNode
    onClick?: () => void
}

export function Button({ mode, classes, text, size, isIcon, children, onClick }: ButtonProps) {
    return (
        <button
            className={clsx(classes, 'rounded-md text-primary-100', {
                'flex items-center gap-2': isIcon,
                'bg-brand-600 hover:bg-brand-700': mode === 'brand',
                'bg-success-600': mode === 'success',
                'hover:bg-error-700 bg-error-600': mode === 'error',
                'px-2.5 py-2 text-mobsm': size === 'base',
                'px-3 py-2 text-mobmd': size === 'small',
                'px-4 py-2 text-moblg': size === 'medium',
            })}
            onClick={onClick}
            type="submit"
        >
            {children}
            {text}
        </button>
    )
}
