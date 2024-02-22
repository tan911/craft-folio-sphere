import { PlusIcon } from '@heroicons/react/24/outline'

export default function Header() {
    return (
        <div className="flex h-[3.75rem] items-center justify-between pb-3">
            <div className="h-full">
                <h1 className="text-primary-900 text-xs font-medium">Hello, Jovan</h1>
                <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
            </div>
            <div className="self-start">
                <button
                    className="bg-brand-600 text-mobsm text-primary-100 hover:bg-brand-700 flex items-center 
                            gap-2 rounded-md
                            px-2.5
                            py-2
                        "
                >
                    <PlusIcon className="w-5" />
                    New Project
                </button>
            </div>
        </div>
    )
}
