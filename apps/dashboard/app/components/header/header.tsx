import Logo from './logo/logo'
import Search from './search'
import Navigation from './sidebar/navigation'

export default function Header() {
    return (
        <div className="w-[19.5rem] px-5 py-8 border border-r-primary-200">
            <Logo />
            <Search
                className="mt-8"
                id="sidebar-search-bar"
                label="search Bar"
                type="text"
                placeholder="Search or jump to"
            />
            <Navigation />
        </div>
    )
}
