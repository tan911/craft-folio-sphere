'use client'

import Sidebar from '@/components/sidebar/sidebar'
import Header from '@/components/header/header'
import { Icon } from '@repo/ui/icons'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen flex-col md:flex-row">
            <div className="relative">
                <div className="flex h-[64px] w-full items-center justify-between border border-primary-300 p-4 md:hidden">
                    <div>
                        <p className="text-mobxl font-bold text-primary-900">CRAFTFOLIO</p>
                    </div>
                    <div>
                        <button
                            aria-label="Menu button"
                            className="flex items-center justify-center rounded-md border border-primary-200 p-2"
                        >
                            <Icon name="menu" size={25} />
                        </button>
                    </div>
                </div>
                <Sidebar />
            </div>
            <div className="flex-1 px-4 py-5 md:p-6">
                <Header />
                <div>{children}</div>
            </div>
        </main>
    )
}
