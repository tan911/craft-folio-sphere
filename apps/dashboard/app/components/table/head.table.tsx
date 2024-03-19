type THeadProps = {
    onSelectAll: (val: boolean) => void
    value: boolean
}

export default function THead({ onSelectAll, value }: THeadProps) {
    return (
        <>
            <thead>
                <tr>
                    <th scope="col" className="relative h-11 pl-16 text-mobsm font-normal">
                        <div className="absolute left-7">
                            <input
                                type="checkbox"
                                name="head"
                                id="head"
                                className="h-4 w-4 accent-blue-500"
                                checked={value}
                                onChange={(e) => onSelectAll(e.target.checked)}
                            />
                            <label className="sr-only" htmlFor="head">
                                head
                            </label>
                        </div>
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
        </>
    )
}
