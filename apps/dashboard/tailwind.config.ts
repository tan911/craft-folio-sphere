import type { Config } from 'tailwindcss'
import { COLORS } from '@repo/ui/colors'
const config: Config = {
    content: [
        './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/**/*.{js,tsx,ts}',
    ],
    theme: {
        extend: {
            fontSize: {
                '2xl': ['4.5rem', { lineHeight: '5.625rem', letterSpacing: '-0.05em' }],
                xl: ['3.75rem', { lineHeight: '4.5rem', letterSpacing: '-0.05em' }],
                lg: ['3rem', { lineHeight: '3.75rem', letterSpacing: '-0.05em' }],
                md: ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.05em' }],
                sm: ['1.875rem', { lineHeight: '2.375rem' }],
                xs: ['1.5rem', { lineHeight: '2rem' }],
                mobxs: ['0.75rem', { lineHeight: '1.125rem' }],
                mobsm: ['0.875rem', { lineHeight: '1.25rem' }],
                mobmd: ['1rem', { lineHeight: '1.5rem' }],
                moblg: ['1.125rem', { lineHeight: '1.75rem' }],
                mobxl: ['1.25rem', { lineHeight: '1.875rem' }],
            },
            colors: {
                'primary-25': COLORS['gray-25'],
                'primary-50': COLORS['gray-50'],
                'primary-100': COLORS['gray-100'],
                'primary-200': COLORS['gray-200'],
                'primary-300': COLORS['gray-300'],
                'primary-400': COLORS['gray-400'],
                'primary-500': COLORS['gray-500'],
                'primary-800': COLORS['gray-800'],
                'primary-900': COLORS['gray-900'],
                'brand-25': COLORS['blue-25'],
                'brand-700': COLORS['blue-700'],
                'brand-600': COLORS['blue-600'],
                'success-25': COLORS['green-25'],
                'success-50': COLORS['green-50'],
                'success-500': COLORS['green-500'],
                'success-600': COLORS['green-600'],
                'success-700': COLORS['green-700'],
                'error-25': COLORS['red-25'],
                'error-50': COLORS['red-50'],
                'error-100': COLORS['red-100'],
                'error-200': COLORS['red-200'],
                'error-300': COLORS['red-300'],
                'error-400': COLORS['red-400'],
                'error-500': COLORS['red-500'],
                'error-600': COLORS['red-600'],
                'error-700': COLORS['red-700'],
                'error-800': COLORS['red-800'],
            },
        },
    },
    plugins: [],
}

export default config
