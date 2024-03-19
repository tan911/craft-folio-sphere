'use client '

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import { IconProvider } from '../icons/IconProviders'
import { InputField, Input } from '../forms'
import { Button } from '../buttons'
import { createProjectSchema } from '@repo/lib/schema'
import { z } from '@repo/lib/index'

const switchValues = ['Active', 'Inactive'] as const
type SwitchValue = (typeof switchValues)[number]

export function CreateModal({
    onFormSubmit,
    isLoading,
}: {
    onFormSubmit: (data: z.infer<typeof createProjectSchema>) => void
    isLoading: boolean
}) {
    const [switchActiveName, setSwitchActiveName] = useState<SwitchValue>(switchValues[0])
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof createProjectSchema>>({
        mode: 'onSubmit',
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: '',
            description: '',
            image: '',
            techStack: '',
            status: 'Active',
        },
    })

    const handleCloseModal = () => {
        router.back()
    }

    const handleSwitchBtn = (item: SwitchValue) => {
        setSwitchActiveName(item)
    }

    const handleFormSubmit: SubmitHandler<z.infer<typeof createProjectSchema>> = async (data) => {
        onFormSubmit(data)
    }

    return (
        <div className="overflow-y auto fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50 transition-all duration-200">
            <div className="relative w-[512px] rounded-md border bg-white bg-white p-8 shadow-lg">
                <div className="absolute right-4 top-4">
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        className="h-8 w-8 rounded-md border p-2 transition-all duration-200 hover:bg-error-100"
                    >
                        <IconProvider name="X" fill="none" size={15} />
                    </button>
                </div>
                <div className="mt-12">
                    <h3 className="text-sm font-bold text-gray-900">Create Project</h3>
                    <div className="mt-4">
                        <form
                            onSubmit={handleSubmit(handleFormSubmit)}
                            className="flex flex-col gap-4"
                        >
                            <InputField className="w-full">
                                <label htmlFor="name" className="mb-1.5 text-mobsm">
                                    Project name<span className="text-error-700">*</span>
                                </label>
                                <Input
                                    {...register('name')}
                                    id="name"
                                    type="text"
                                    className="w-full rounded-md border px-2 py-1.5"
                                    name="name"
                                    aria-describedby="name-error-message"
                                />
                                <div id="name-error-message" aria-live="polite">
                                    <span className="text-mobxs font-bold text-error-500">
                                        {errors.name?.message}
                                    </span>
                                </div>
                            </InputField>
                            <InputField className="w-full">
                                <label htmlFor="description" className="mb-1.5 text-mobsm">
                                    About the project<span className="text-error-700">*</span>
                                </label>
                                <Input
                                    {...register('description')}
                                    id="description"
                                    type="text"
                                    className="w-full rounded-md border px-2 py-1.5"
                                    name="description"
                                    aria-describedby="description-error-message"
                                />
                                <div id="description-error-message" aria-live="polite">
                                    <span className="text-mobxs font-bold text-error-500">
                                        {errors.description?.message}
                                    </span>
                                </div>
                            </InputField>
                            <InputField className="w-full">
                                <label htmlFor="image" className="mb-1.5 text-mobsm">
                                    Image<span className="text-error-700">*</span>
                                </label>
                                <Input
                                    {...register('image')}
                                    id="image"
                                    type="text"
                                    className="w-full rounded-md border px-2 py-1.5"
                                    name="image"
                                    aria-describedby="image-error-message"
                                />
                                <div id="image-error-message" aria-live="polite">
                                    <span className="text-mobxs font-bold text-error-500">
                                        {errors.image?.message}
                                    </span>
                                </div>
                            </InputField>
                            <InputField className="w-full">
                                <label htmlFor="techStack" className="mb-1.5 text-mobsm">
                                    Technologies you use<span className="text-error-700">*</span>
                                </label>
                                <Input
                                    {...register('techStack')}
                                    id="techStack"
                                    type="text"
                                    className="w-full rounded-md border px-2 py-1.5"
                                    name="techStack"
                                    placeholder="ex. ['html', 'javascript']"
                                    aria-describedby="techStack-error-message"
                                />
                                <div id="techStack-error-message" aria-live="polite">
                                    <span className="text-mobxs font-bold text-error-500">
                                        {errors.techStack?.message}
                                    </span>
                                </div>
                            </InputField>
                            <fieldset className="flex w-fit rounded-lg border bg-primary-100 p-1 shadow-sm">
                                <legend className="sr-only">Switches</legend>
                                {switchValues.map((item) => {
                                    const name = 'switches-' + item.toLowerCase()
                                    return (
                                        <div
                                            className={clsx(
                                                'relative h-8 w-20 cursor-pointer rounded-[7px] text-primary-400 opacity-75 transition-all',
                                                {
                                                    'border bg-white font-semibold text-primary-900 drop-shadow-sm':
                                                        item === switchActiveName,
                                                }
                                            )}
                                            onClick={() => handleSwitchBtn(item)}
                                            tabIndex={0}
                                            key={item}
                                        >
                                            <label
                                                htmlFor={name}
                                                aria-labelledby={name}
                                                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                                            >
                                                {item}
                                            </label>
                                            <Input
                                                {...register('status')}
                                                name="status"
                                                type="radio"
                                                id={name}
                                                value={item}
                                                className="sr-only w-full"
                                                aria-describedby={`${item}-error-message`}
                                            />
                                            <div id={`${item}-error-message`} aria-live="polite">
                                                <span className="text-mobxs font-bold text-error-500">
                                                    {errors.status?.message}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </fieldset>
                            <div className="mt-4 flex w-full items-center justify-center gap-2">
                                <Button
                                    type="submit"
                                    size={'base'}
                                    intent={'brand'}
                                    className="rounded-md px-[1.1em] py-[.625em]"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Saving...' : 'Create'}
                                </Button>
                                <Button
                                    onClick={handleCloseModal}
                                    type="button"
                                    size={'base'}
                                    intent={'error'}
                                    className="rounded-md px-[1.1em] py-[.625em]"
                                    disabled={isLoading}
                                >
                                    Discard
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
