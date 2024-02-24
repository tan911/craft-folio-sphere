import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type SearchProps = {
    type: string
    id: string
    label: string
    placeholder: string
    className?: string
}

export default function Search(props: SearchProps) {
    return (
        <div className={`relative h-11 ${props.className}`}>
            <form className="h-full">
                <label htmlFor={props.id} className="sr-only">
                    {props.label}
                </label>
                <input
                    type={props.type}
                    name={props.label}
                    id={props.id}
                    placeholder={props.placeholder}
                    className="h-full w-full rounded-md border border-primary-300 py-2 pl-9 pr-3"
                />
            </form>
            <MagnifyingGlassIcon className="absolute bottom-0 top-0 w-5 translate-x-1/2 translate-y-2/3 text-primary-300" />
        </div>
    )
}
