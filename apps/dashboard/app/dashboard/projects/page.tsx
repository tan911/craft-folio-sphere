'use server'

import { Switches } from '@repo/ui/forms'
import { Search } from '@repo/ui/forms'
import { EditIcon, DeleteIcon } from '@/components/icons/outline'
import { data } from '@/lib/placholder-data'
import Pagination from '@/components/pagination'

export default async function Page() {
    return (
        <>
            <section className="mb-8 mt-2 flex h-[34rem] flex-col gap-4 md:my-2 md:h-44 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="h-full w-full border text-center md:w-1/2">Cards 1</div>
                <div className="h-full w-full border text-center md:w-1/2">Cards 2</div>
                <div className="h-full w-full border text-center md:w-1/2">Cards 3</div>
            </section>
            <section className="flex h-[41.375rem] flex-col items-center">
                <div className="my-4 flex w-full flex-col md:my-7 md:h-11 md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 flex flex-col items-center gap-4 md:mb-0 md:flex-row md:gap-8">
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
                <div className="h-[34.25rem] w-full rounded-lg border border-primary-200 shadow-sm">
                    <table className="min-w-full table-auto divide-y divide-primary-200 rounded-lg text-left font-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="h-11 pl-16 text-mobsm font-normal">
                                    Project name
                                </th>
                                <th scope="col" className="h-11 px-4 text-mobsm font-normal">
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="hidden h-11 px-4 text-mobsm font-normal md:table-cell"
                                >
                                    About
                                </th>
                                <th
                                    scope="col"
                                    className="hidden h-11 px-4 text-mobsm font-normal md:table-cell"
                                >
                                    Last update
                                </th>
                                <th scope="col" className="sr-only">
                                    Modify
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary-200">
                            {data.project.map((item) => (
                                <tr key={item.id} className="odd:bg-primary-100">
                                    <td className="h-[4.5rem] pl-16">{item.name}</td>
                                    <td className="h-[4.5rem] px-4">{item.status}</td>
                                    <td className="hidden h-[4.5rem] px-4 md:table-cell">
                                        {item.description}
                                    </td>
                                    <td className="hidden h-[4.5rem] px-4 md:table-cell">
                                        {item.updatedAt}
                                    </td>
                                    <td className="flex hidden h-[4.5rem] w-[116px] flex-row justify-between gap-2 p-4 md:flex">
                                        <button
                                            aria-label="Delete"
                                            className="block rounded-md border border-transparent px-2 transition-all hover:border-error-600 hover:bg-error-25"
                                        >
                                            <DeleteIcon />
                                        </button>
                                        <button
                                            aria-label="Edit"
                                            className="block rounded-md border border-transparent px-2 transition-all hover:border-success-600 hover:bg-success-25"
                                        >
                                            <EditIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </section>
        </>
    )
}
