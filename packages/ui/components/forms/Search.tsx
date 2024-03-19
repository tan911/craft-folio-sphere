'use client'

import { IconProvider } from '../icons/index'

type SearchProps = {
    type: string
    id: string
    label: string
    placeholder: string
    className?: string
    value?: string
    onSearch: (term: string) => void
}

export function Search(props: SearchProps) {
    return (
        <div className={`relative h-11 ${props.className}`}>
            <div className="h-full">
                <label htmlFor={props.id} className="sr-only">
                    {props.label}
                </label>
                <input
                    type={props.type}
                    name={props.label}
                    id={props.id}
                    placeholder={props.placeholder}
                    className="h-full w-full rounded-md border border-primary-300 py-2 pl-9 pr-3"
                    onChange={(e) => props.onSearch(e.target.value)}
                    defaultValue={props.value}
                />
            </div>
            <IconProvider
                name="Search"
                size={24}
                fill="none"
                className="absolute bottom-0 left-2.5 top-0 w-5 translate-y-1/2 text-primary-300"
            />
        </div>
    )
}
