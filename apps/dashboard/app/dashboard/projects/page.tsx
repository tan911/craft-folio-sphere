import Search from '@/components/header/search'

export default function Page() {
    return (
        <>
            <div className="h-44 flex justify-between items-center gap-10 my-2">
                <div className="w-1/2 h-full border text-center">Cards 1</div>
                <div className="w-1/2 h-full border text-center">Cards 2</div>
                <div className="w-1/2 h-full border text-center">Cards 3</div>
            </div>
            <div className="h-11 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div>toggle btn</div>
                    <div>dropdowns</div>
                </div>
                <Search
                    id="filter-search-bar"
                    label="Filter Bar"
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div>Table</div>
        </>
    )
}
