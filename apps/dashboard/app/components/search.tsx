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
                    className="w-full py-2 pl-9 pr-3 h-full border border-primary-300 rounded-md"
                />
            </form>
            <MagnifyingGlassIcon className="absolute w-5 top-0 bottom-0 translate-y-2/3 translate-x-1/2 text-primary-300" />
        </div>
    )
}
