import { type ReactNode } from 'react'
import clsx from 'clsx'

const buttonMode = ['brand', 'success', 'error'] as const
const buttonSize = ['base', 'small', 'medium'] as const

type Values<T> = T[keyof T]

type ButtonProps = {
    mode: Values<typeof buttonMode>
    size: Values<typeof buttonSize>
    isIcon: boolean
    onEvent: () => void
    classes?: string
    children?: ReactNode
    disabled?: boolean
    type: 'submit' | 'reset' | 'button' | undefined;
}

export function Button({ mode, classes, size, isIcon, children, onEvent, type }: ButtonProps) {
    return (
        <button
            className={clsx(
                classes,
                'rounded-md text-primary-200',
                { 'bg-brand-600 hover:bg-brand-700': mode === 'brand' },
                { 'bg-success-600 hover:bg-success-700': mode === 'success' },
                { 'bg-error-600 hover:bg-error-700': mode === 'error' },
                { 'px-2.5 py-2 text-mobsm': size === 'base' },
                { 'px-3 py-2 text-mobmd': size === 'small' },
                { 'px-4 py-2 text-moblg': size === 'medium' },
                { 'flex items-center gap-2': isIcon }
            )}
            onClick={onEvent}
            type={type}
        >
            {children}
        </button>
    )
}
