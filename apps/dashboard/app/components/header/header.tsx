import { PlusIcon } from '@heroicons/react/24/outline'
import { Button } from '@repo/ui'

export default function Header() {
    return (
        <div className="mb-5 flex h-[120px] flex-col gap-2 pb-3 md:mb-0 md:h-[3.75rem] md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="h-full">
                <h1 className="text-xs font-medium text-primary-900">Hello, Jovan</h1>
                <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
            </div>
            <div className="self-start">
                <Button mode="brand" isIcon={true} size="medium" text="New Project">
                    <PlusIcon className="w-5" />
                </Button>
            </div>
        </div>
    )
}
