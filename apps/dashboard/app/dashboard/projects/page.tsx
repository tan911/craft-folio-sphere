import Search from '@/components/search'
import Switches from '@/components/switches'

import { data } from '../../lib/placholder-data'

export default function Page() {
    return (
        <>
            <section className="my-2 flex h-44 items-center justify-between gap-10">
                <div className="h-full w-1/2 border text-center">Cards 1</div>
                <div className="h-full w-1/2 border text-center">Cards 2</div>
                <div className="h-full w-1/2 border text-center">Cards 3</div>
            </section>
            <section>
                <div className="my-7 flex h-11 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Switches />
                        <div>dropdowns</div>
                    </div>
                    <Search
                        id="filter-search-bar"
                        label="Filter Bar"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div>
                    <table className="h-full min-w-full table-auto border text-left font-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="text-mobsm h-11 font-normal">
                                    Project name
                                </th>
                                <th scope="col" className="text-mobsm h-11 font-normal">
                                    Status
                                </th>
                                <th scope="col" className="text-mobsm h-11 font-normal">
                                    About
                                </th>
                                <th scope="col" className="text-mobsm h-11 font-normal">
                                    Last update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.project.map((item) => (
                                <tr key={item.updatedAt}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.description}</td>
                                    <td>{item.updatedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
