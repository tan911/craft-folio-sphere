export function TBodySkeleton({ rows }: { rows: number }) {
    return (
        <tbody>
            {Array.from({ length: rows }, (v, i) => i).map((item) => (
                <tr key={item} className="rounded-lg bg-primary-200">
                    <td className="h-[4.5rem] pl-16"></td>
                    <td className="h-[4.5rem] px-4"></td>
                    <td className="hidden h-[4.5rem] px-4 md:table-cell"></td>
                    <td className="hidden h-[4.5rem] px-4 md:table-cell"></td>
                    <td className="flex hidden h-[4.5rem] w-[116px] flex-row justify-between gap-2 p-4 md:flex">
                        <div className="block rounded-md bg-primary-200"></div>
                        <div className="block rounded-md bg-primary-200"></div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default function TableSkeleton({ bodyRows }: { bodyRows: number }) {
    return (
        <table className="min-w-full table-auto animate-pulse rounded-lg">
            <thead>
                <tr className="rounded-lg bg-primary-200">
                    <th className="h-11 pl-16"></th>
                    <th className="h-11 pl-16"></th>
                    <th className="h-11 pl-16"></th>
                    <th className="h-11 pl-16"></th>
                    <th className="h-11 pl-16"></th>
                </tr>
            </thead>
            <TBodySkeleton rows={bodyRows} />
        </table>
    )
}
