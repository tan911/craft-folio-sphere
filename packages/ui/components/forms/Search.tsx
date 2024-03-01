'use client'

import { Icon } from '../icons/index'

type SearchProps = {
    type: string
    id: string
    label: string
    placeholder: string
    className?: string
}

export function Search(props: SearchProps) {
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
            <Icon
                name="search"
                size={24}
                className="absolute bottom-0 left-2.5 top-0 w-5 translate-y-1/2 text-primary-300"
            />
        </div>
    )
}
