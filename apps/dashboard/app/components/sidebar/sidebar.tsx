import Logo from './logo/logo'
import Search from '../search'
import Navigation from './navigation'

export default function Sidebar() {
    return (
        <aside className="border-r-primary-200 w-[19.5rem] border px-5 py-8">
            <Logo />
            <Search
                className="mt-8"
                id="sidebar-search-bar"
                label="search Bar"
                type="text"
                placeholder="Search or jump to"
            />
            <Navigation />
        </aside>
    )
}
