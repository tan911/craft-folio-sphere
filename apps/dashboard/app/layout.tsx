import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Craftfoliosphere',
    description: 'Simple portfolio tool that will showcase your skills effortlessly',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-neutral-900 text-neutral-500">
            <body className={`${inter.className} antialiased h-screen`}>{children}</body>
        </html>
    )
}
