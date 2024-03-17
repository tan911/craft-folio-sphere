import type { Metadata } from 'next'
import { type Session } from 'next-auth'
import { Inter } from 'next/font/google'
import Provider from './_trpc/provider'
import { AppProviders } from '@/lib/providers'
import { nextAuth } from '@/auth'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Craftfoliosphere',
    description: 'Simple portfolio tool that will showcase your skills effortlessly',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await nextAuth.auth()
    return (
        <html lang="en" className="text-neutral-500">
            <body className={`${inter.className} min-h-screen antialiased`}>
                <AppProviders>
                    <Provider session={session as Session}>{children}</Provider>
                </AppProviders>
            </body>
        </html>
    )
}
