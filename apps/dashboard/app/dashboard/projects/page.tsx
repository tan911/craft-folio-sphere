import Search from '@/components/search'
import Switches from '@/components/switches'

import { data } from '../../lib/placholder-data'

export default function Page() {
    return (
        <>
            <section className="h-44 flex justify-between items-center gap-10 my-2">
                <div className="w-1/2 h-full border text-center">Cards 1</div>
                <div className="w-1/2 h-full border text-center">Cards 2</div>
                <div className="w-1/2 h-full border text-center">Cards 3</div>
            </section>
            <section>
                <div className="h-11 flex justify-between items-center my-7">
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
                    <table className="table-auto min-w-full h-full text-left font-normal border">
                        <thead>
                            <tr>
                                <th scope="col" className="h-11 text-mobsm font-normal">
                                    Project name
                                </th>
                                <th scope="col" className="h-11 text-mobsm font-normal">
                                    Status
                                </th>
                                <th scope="col" className="h-11 text-mobsm font-normal">
                                    About
                                </th>
                                <th scope="col" className="h-11 text-mobsm font-normal">
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
