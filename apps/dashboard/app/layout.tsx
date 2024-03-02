import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Provider from './_trpc/provider'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Craftfoliosphere',
    description: 'Simple portfolio tool that will showcase your skills effortlessly',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="text-neutral-500">
            <body className={`${inter.className} min-h-screen antialiased`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
