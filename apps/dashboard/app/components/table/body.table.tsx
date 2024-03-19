import { type ChangeEvent } from 'react'
import { IconProvider } from '@repo/ui/icons'
import { Status } from '@repo/prisma'

type Data = {
    id: number
    name: string
    image: string
    status: Status
    description: string
    projectId: string
    updatedAt: string
    techStack: string[]
    isChecked: boolean
}[]

type EventType = 'Delete' | 'Update'

type TBodyProps = {
    data: Data | undefined
    onSelectOne: (id: number, event: ChangeEvent<HTMLInputElement>) => void
}

export default function TBody({ data, onSelectOne }: TBodyProps) {
    const handleMutationEvent = (eventType: EventType, id: number) => {
        // TODO
        console.log('sdfdsfs', eventType, id)
    }

    return (
        <>
            {data?.length === 0 ? (
                <tbody className="absolute inset-0 m-auto flex h-[120px] w-[120px] transform items-center justify-center">
                    <tr className="opacity-80">
                        <td>Currently, No data available</td>
                    </tr>
                </tbody>
            ) : (
                <tbody className="divide-y divide-primary-200">
                    {data?.map((item) => (
                        <tr key={item.id} className="odd:bg-primary-100">
                            <td className="relative h-[4.5rem] pl-16">
                                <div className="absolute left-7">
                                    <input
                                        type="checkbox"
                                        name={item.name}
                                        id={item.name}
                                        className="h-4 w-4 accent-blue-500"
                                        checked={item.isChecked}
                                        onChange={(event) => onSelectOne(item.id, event)}
                                    />
                                    <label className="sr-only" htmlFor={item.name}>
                                        {item.name}
                                    </label>
                                </div>
                                {item.name}
                            </td>
                            <td className="h-[4.5rem] px-4">{item.status}</td>
                            <td className="hidden h-[4.5rem] px-4 md:table-cell">
                                {item.description}
                            </td>
                            <td className="hidden h-[4.5rem] px-4 md:table-cell">
                                {item.updatedAt}
                            </td>
                            <td className="flex hidden h-[4.5rem] w-[116px] flex-row justify-between gap-2 p-4 md:flex">
                                <button
                                    onClick={() => handleMutationEvent('Delete', item.id)}
                                    aria-label="Delete"
                                    className="modify-btn block rounded-md border border-transparent px-2 transition-all hover:border-error-600"
                                >
                                    <IconProvider
                                        fill="none"
                                        name="Trash2"
                                        size={24}
                                        className="trash-icon"
                                    />
                                </button>
                                <button
                                    onClick={() => handleMutationEvent('Update', item.id)}
                                    aria-label="Edit"
                                    className="modify-btn block rounded-md border border-transparent px-2 transition-all hover:border-success-600 hover:bg-success-25"
                                >
                                    <IconProvider
                                        fill="none"
                                        name="Pen"
                                        size={24}
                                        className="pen-icon"
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        </>
    )
}
