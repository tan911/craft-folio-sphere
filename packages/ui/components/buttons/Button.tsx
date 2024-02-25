import { type ReactNode } from 'react'
import clsx from 'clsx'

const buttonMode = ['base', 'brand', 'success', 'error'] as const
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
    type: 'submit' | 'reset' | 'button'
}

export function Button({ mode, classes, size, isIcon, children, onEvent, type }: ButtonProps) {
    return (
        <button
            className={clsx(
                classes,
                'pointer rounded-md',
                {
                    'border border-primary-300 bg-transparent font-medium text-primary-900 hover:bg-primary-100':
                        mode === 'base',
                },
                { 'bg-brand-600 text-primary-200 hover:bg-brand-700': mode === 'brand' },
                { 'bg-success-600 text-primary-200 hover:bg-success-700': mode === 'success' },
                { 'bg-error-600 text-primary-200 hover:bg-error-700': mode === 'error' },
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
