'use client'

import '@/styles/globals.scss'
import Link from 'next/link'
import { HomeIcon, ComputerDesktopIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Projects', href: '/dashboard/projects', icon: ComputerDesktopIcon },
    { name: 'Works', href: '/dashboard/works', icon: BriefcaseIcon },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname()

    return (
        <div className="flex h-screen">
            <div className="w-[15rem] my-2 ml-2">
                <div className="flex justify-between p-5 border-b border-neutral-800">
                    <div>LOGO</div>
                    <div>Picture</div>
                </div>
                <div className="py-5">
                    {links.map((link) => {
                        const LinkIcon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex items-center gap-2 h-10 block hover:text-gray-200 px-4 rounded-md',
                                    {
                                        'bg-neutral-700 text-gray-200': pathName === link.href,
                                    }
                                )}
                            >
                                <LinkIcon className="w-5" />
                                <p>{link.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="flex-1 border border-1 border-neutral-800 rounded-3xl m-2">
                <div className="border-b border-neutral-800 px-2">
                    <div className="p-5 text-gray-200">
                        <h3>Header</h3>
                    </div>
                </div>
                <div className="mx-2">{children}</div>
            </div>
        </div>
    )
}
