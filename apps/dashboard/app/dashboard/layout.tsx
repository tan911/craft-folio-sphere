'use client'

import '@/styles/globals.scss'
import Sidebar from '@/components/sidebar/sidebar'
import Header from '@/components/header/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen">
            <Sidebar />
            <div className="flex-1 px-7 py-8">
                <Header />
                <div>{children}</div>
            </div>
        </main>
    )
}
