import Logo from './logo/logo'
import { Search } from '@repo/ui/forms'
import { Icon } from '@repo/ui/icons'
import Navigation from './navigation'

import * as action from '@/lib/actions'

export default function Sidebar() {
    return (
        <aside
            className="md:auto absolute right-0 top-0 z-10
            flex h-screen w-[14.375rem] flex-col justify-between border-l border-primary-200 bg-white px-4 py-4 
            md:static md:right-auto md:top-auto md:w-[19.5rem] md:border-r md:border-primary-200 md:bg-transparent md:px-5 md:py-8"
        >
            <div>
                <Logo />
                <Search
                    className="mt-4 md:mt-8"
                    id="sidebar-search-bar"
                    label="Search Bar"
                    type="text"
                    placeholder="Search or jump to"
                />
                <Navigation />
            </div>
            <div className="mt-23">
                <form action={action.signOut}>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-md px-3 py-2 transition-all hover:bg-primary-200 hover:text-primary-900 hover:shadow-md"
                    >
                        <Icon name="log-out" size={24} />
                        <span>Sign out</span>
                    </button>
                </form>
            </div>
        </aside>
    )
}
