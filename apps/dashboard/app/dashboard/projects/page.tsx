'use client'

import { useEffect, useState, type ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { trpc } from '@/trpc/trpc'
import { TBodySkeleton } from '@/components/skeleton/table.skeleton'
import { Switches, Search } from '@repo/ui/forms'
import { Pagination } from '@repo/ui/pagination'
import TBody from '@/components/table/body.table'
import THead from '@/components/table/head.table'

type SearchParamsProps = {
    searchParams?: {
        query?: string
        page?: string
    }
}

export default function Page({ searchParams }: SearchParamsProps) {
    const { data: projectResultList, isLoading } = trpc.getProjects.useQuery({
        currentPage: Number(searchParams?.page) || 1,
        itemsPerPage: 6,
    })
    const router = useRouter()
    const searchParameter = useSearchParams()
    const pathname = usePathname()
    const [selectAll, setSelectAll] = useState(false)
    const [resultData, setResultData] = useState(projectResultList?.data)

    const handleAllSelect = (isAllItemChecked: boolean) => {
        const updatedData = projectResultList?.data.map((item) => {
            return {
                ...item,
                isChecked: isAllItemChecked,
            }
        })
        setResultData(updatedData)
        setSelectAll(isAllItemChecked)
    }

    const handleItemSelect = (id: number, event: ChangeEvent<HTMLInputElement>) => {
        const updateData = resultData?.map((item) => {
            if (item.id === id) {
                return { ...item, isChecked: event.target.checked }
            }
            return item
        })
        setResultData(updateData)
    }

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        router.replace(`${pathname}?${params.toString()}`)
    }, 300)

    useEffect(() => {
        setResultData(projectResultList?.data)
    }, [projectResultList])

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
                        placeholder="Search projects..."
                        onSearch={handleSearch}
                        value={searchParameter.get('query')?.toString()}
                    />
                </div>
                <div className="relative flex h-[34.25rem] w-full flex-col justify-between rounded-lg border border-primary-200 shadow-sm">
                    <table className="min-w-full table-auto divide-primary-200 rounded-lg text-left font-normal">
                        <THead onSelectAll={handleAllSelect} value={selectAll} />
                        {isLoading ? (
                            <TBodySkeleton rows={6} />
                        ) : (
                            <TBody data={resultData} onSelectOne={handleItemSelect} />
                        )}
                    </table>
                    <div className="mb-8 flex items-center justify-center ">
                        <Pagination totalPages={Math.ceil(Number(projectResultList?.total) / 6)} />
                    </div>
                </div>
            </section>
        </>
    )
}
