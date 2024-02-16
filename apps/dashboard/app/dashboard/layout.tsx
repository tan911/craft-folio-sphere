'use client'

import { PlusIcon } from '@heroicons/react/24/outline'
import '@/styles/globals.scss'
import Header from '@/components/header/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <Header />
            <main className="flex-1 py-8 px-7">
                <div className="h-[3.75rem] flex items-center justify-between pb-3">
                    <div className="h-full">
                        <h1 className="text-xs font-medium text-primary-900">Hello, Jovan</h1>
                        <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
                    </div>
                    <div className="self-start">
                        <button
                            className="flex items-center gap-2 px-2.5 py-2 bg-brand-600 
                            text-mobsm text-primary-100
                            rounded-md
                            hover:bg-brand-700
                        "
                        >
                            <PlusIcon className="w-5" />
                            New Project
                        </button>
                    </div>
                </div>
                <div>{children}</div>
            </main>
        </div>
    )
}
