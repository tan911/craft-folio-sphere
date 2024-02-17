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
                <fieldset className="flex bg-primary-100 rounded-lg p-1 shadow-sm border">
                    <legend className="sr-only">Switches</legend>
                    {switchValues.map((item) => {
                        const name = 'switches-' + item.toLowerCase()
                        return (
                            <div
                                className={clsx(
                                    'w-20 h-8 relative text-primary-400 opacity-75 rounded-[7px] cursor-pointer transition-all',
                                    {
                                        'bg-white drop-shadow-sm text-primary-900 font-semibold border':
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
                                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
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
