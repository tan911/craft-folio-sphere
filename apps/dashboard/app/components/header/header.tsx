import { PlusIcon } from '@heroicons/react/24/outline'

export default function Header() {
    return (
        <div className="mb-5 flex h-[120px] flex-col gap-2 pb-3 md:mb-0 md:h-[3.75rem] md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="h-full">
                <h1 className="text-xs font-medium text-primary-900">Hello, Jovan</h1>
                <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
            </div>
            <div className="self-start">
                <button
                    className="flex items-center gap-2 rounded-md bg-brand-600 px-2.5 
                            py-2 text-mobsm
                            text-primary-100
                            hover:bg-brand-700
                        "
                >
                    <PlusIcon className="w-5" />
                    New Project
                </button>
            </div>
        </div>
    )
}
