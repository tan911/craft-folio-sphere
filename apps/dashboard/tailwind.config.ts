import type { Config } from 'tailwindcss'
import { COLORS } from '@repo/ui/colors'
const config: Config = {
    content: [
        './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
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
                'primary-900': COLORS['gray-900'],
                'brand-25': COLORS['blue-25'],
                'brand-700': COLORS['blue-700'],
                'brand-600': COLORS['blue-600'],
                'success-50': COLORS['green-50'],
                'success-500': COLORS['green-500'],
            },
        },
    },
    plugins: [],
}

export default config
