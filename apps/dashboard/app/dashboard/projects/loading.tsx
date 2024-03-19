import TableSkeleton from '@/components/skeleton/table.skeleton'

export default function ProjectLoadingPage() {
    return (
        <>
            <div className="mb-8 mt-2 flex h-[34rem] flex-col gap-4 md:my-2 md:h-44 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="h-full w-full animate-pulse bg-primary-200 md:w-1/2"></div>
                <div className="h-full w-full animate-pulse bg-primary-200 md:w-1/2"></div>
                <div className="h-full w-full animate-pulse bg-primary-200 md:w-1/2"></div>
            </div>
            <div className="flex h-[41.375rem] flex-col items-center">
                <div className="my-4 flex w-full flex-col md:my-7 md:h-11 md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 flex flex-col items-center gap-4 md:mb-0 md:flex-row md:gap-8">
                        <div className="h-[42px] w-[240px] animate-pulse bg-primary-200"></div>
                        <div className="h-[42px] w-[90px] animate-pulse bg-primary-200"></div>
                    </div>
                    <div className="h-[42px] w-[270px] bg-primary-200"></div>
                </div>
                <div className="h-[34.25rem] w-full rounded-lg rounded-lg shadow-sm">
                    <TableSkeleton bodyRows={6} />
                    <div className="flex flex-row items-center justify-between p-4">
                        <div className="flex gap-2 md:gap-4">
                            <div className="h-[30px] w-[100px] animate-pulse bg-primary-200"></div>
                            <div className="h-[30px] w-[50px] animate-pulse bg-primary-200"></div>
                        </div>
                        <div>
                            <div className="h-[30px] w-[200px] animate-pulse bg-primary-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
