'use client'
import { useState } from 'react'
import clsx from 'clsx'

const switchValues = ['All', 'Active', 'Inactive'] as const
type SwitchValue = (typeof switchValues)[number]

export default function Switches() {
    const [switchActiveName, setSwitchActiveName] = useState<SwitchValue>(switchValues[0])

    const handleSwitchBtn = (item: SwitchValue) => {
        setSwitchActiveName(item)
    }

    return (
        <div>
            <form>
                <fieldset className="bg-primary-100 flex rounded-lg border p-1 shadow-sm">
                    <legend className="sr-only">Switches</legend>
                    {switchValues.map((item) => {
                        const name = 'switches-' + item.toLowerCase()
                        return (
                            <div
                                className={clsx(
                                    'text-primary-400 relative h-8 w-20 cursor-pointer rounded-[7px] opacity-75 transition-all',
                                    {
                                        'text-primary-900 border bg-white font-semibold drop-shadow-sm':
                                            item === switchActiveName,
                                    }
                                )}
                                onClick={() => handleSwitchBtn(item)}
                                key={item}
                                tabIndex={0}
                            >
                                <label
                                    htmlFor={name}
                                    aria-labelledby={name}
                                    className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                                >
                                    {item}
                                </label>
                                <input
                                    name="switches"
                                    type="radio"
                                    id={name}
                                    value={item.toLowerCase()}
                                    className="sr-only"
                                />
                            </div>
                        )
                    })}
                </fieldset>
            </form>
        </div>
    )
}
