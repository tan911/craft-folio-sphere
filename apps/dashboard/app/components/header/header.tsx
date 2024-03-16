'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

import { IconProvider } from '@repo/ui/icons'
import { CreateModal } from '@repo/ui/modal'
import { createProjectSchema } from '@repo/lib/schema'
import { z } from '@repo/lib/index'

export default function Header() {
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const isModalVisible = searchParams.get('modal')

    const handleFormSubmit = (data: z.infer<typeof createProjectSchema>) => {
        console.log(data)
    }

    return (
        <div className="mb-5 flex h-[120px] flex-col gap-2 pb-3 md:mb-0 md:h-[3.75rem] md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="h-full">
                <h1 className="text-xs font-medium text-primary-900">Hello, Jovan</h1>
                <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
            </div>
            <div className="self-start">
                <Link
                    href={`${pathName}?modal=true`}
                    className="flex gap-2 rounded-md bg-brand-600 px-4 py-2 text-white"
                >
                    <IconProvider name="Plus" size={24} className="w-5" />
                    New Project
                </Link>
            </div>
            {isModalVisible && <CreateModal onFormSubmit={handleFormSubmit} />}
        </div>
    )
}
