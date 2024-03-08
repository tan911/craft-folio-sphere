import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('some-props-default', {
    variants: {
        intent: {
            brand: ['bg-brand-600 text-white hover:bg-brand-700'],
            success: ['bg-success-600 text-white hover:bg-success-700'],
            error: ['bg-error-600 text-white hover:bg-error-700'],
            primary: ['text-white', 'border-transparent'],
            secondary: ['text-gray-800', 'border-gray-400'],
        },
        size: {
            small: ['text-mobsm', 'py-1', 'px-2'],
            base: ['text-mobmd', 'py-2', 'px-4'],
            medium: ['text-lg', 'py-4', 'px-6'],
        },
    },
    compoundVariants: [{ intent: 'primary', size: 'base', class: 'capitalize' }],
    defaultVariants: {
        intent: 'primary',
        size: 'base',
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, intent, size, ...props }) => (
    <button className={button({ intent, size, className })} {...props}>
        {props.children}
    </button>
)
