import Logo from './logo/logo'
import { Search } from '@repo/ui/forms'
import Navigation from './navigation'

export default function Sidebar() {
    return (
        <aside
            className="md:auto absolute right-0
            top-0 z-10 h-screen w-[14.375rem] border-l border-primary-200 bg-white px-4 py-4 
            md:static md:right-auto md:top-auto md:w-[19.5rem] md:border-r md:border-primary-200 md:bg-transparent md:px-5 md:py-8"
        >
            <Logo />
            <Search
                className="mt-4 md:mt-8"
                id="sidebar-search-bar"
                label="Search Bar"
                type="text"
                placeholder="Search or jump to"
            />
            <Navigation />
        </aside>
    )
}
