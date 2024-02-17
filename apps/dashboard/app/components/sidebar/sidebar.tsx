import Logo from './logo/logo'
import Search from '../search'
import Navigation from './navigation'

export default function Sidebar() {
    return (
        <aside className="w-[19.5rem] px-5 py-8 border border-r-primary-200">
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
