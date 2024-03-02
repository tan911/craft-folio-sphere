'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import clsx from 'clsx'

import * as actions from '@/lib/actions'
import Title from '@/components/auth/title'
import Wrapper from '@/components/auth/wrapper'
import { IconProvider } from '@repo/ui/icons'
import {
    createUserSchema,
    hasLowercase,
    hasNumber,
    hasSpecialChars,
    hasUppercase,
    greaterThanSevenChars,
} from '@/lib/zodSchema'

export default function SignUpPage() {
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const {
        handleSubmit,
        register,
        watch,
        getFieldState,
        formState: { errors, isDirty },
    } = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        mode: 'onTouched',
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    })

    const handleFormSubmit: SubmitHandler<z.infer<typeof createUserSchema>> = (data: any) => {
        console.log(data)
    }

    return (
        <Wrapper
            authType="signUp"
            header={<Title headerLabel="Get started" messageLabel="Create a new account" />}
        >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="username" className="block text-mobsm">
                        Username
                    </label>
                    <input
                        {...register('username')}
                        type="text"
                        id="username"
                        placeholder="your name"
                        aria-describedby="username-error-message"
                        className={clsx(
                            'w-full rounded-md px-3 py-2',
                            !errors.username?.message && 'border border-primary-300 bg-primary-100',
                            errors.username?.message && 'border border-error-700 bg-error-100'
                        )}
                    />
                    <div id="username-error-message" aria-live="polite">
                        <span className="text-mobxs font-bold text-error-500">
                            {errors.username?.message}
                        </span>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="email" className="block text-mobsm">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="your@email.com"
                        aria-describedby="email-error-message"
                        className={clsx(
                            'w-full rounded-md px-3 py-2',
                            !errors.email?.message && 'border border-primary-300 bg-primary-100',
                            errors.email?.message && 'border border-error-700 bg-error-100'
                        )}
                        {...register('email')}
                    />
                    <div id="email-error-message" aria-live="polite">
                        <span className="mb-3 mt-1 text-mobxs font-bold text-error-500 transition-all">
                            {errors.email?.message}
                        </span>
                    </div>
                </div>
                <div className="relative flex w-full flex-col gap-1">
                    <label htmlFor="password" className="block text-mobsm">
                        Password
                    </label>
                    <input
                        type={isPasswordShown ? 'text' : 'password'}
                        id="password"
                        placeholder="password"
                        aria-describedby="password-error-message"
                        className={clsx(
                            'bg w-full rounded-md px-3 py-2',
                            !errors.password?.message && 'border border-primary-300 bg-primary-100',
                            errors.password?.message && 'border border-error-700 bg-error-100'
                        )}
                        {...register('password')}
                    />
                    <div id="password-error-message" aria-live="polite">
                        <span className="mb-3 mt-1 block text-mobxs font-bold text-error-500 transition-all">
                            {errors.password?.message}
                        </span>
                    </div>
                    <button
                        type="button"
                        className="absolute right-2 top-8 rounded-md border border-primary-300 bg-primary-200 px-3 py-1.5 transition-all hover:opacity-85"
                        onClick={() => setIsPasswordShown(!isPasswordShown)}
                    >
                        <IconProvider
                            name={isPasswordShown ? 'EyeOff' : 'Eye'}
                            size={13}
                            fill="none"
                        />
                    </button>
                    {getFieldState('password').isTouched && (
                        <div>
                            <ul>
                                <li className="flex items-center gap-2">
                                    <IconProvider
                                        name="Circle"
                                        size={13}
                                        fill={
                                            hasUppercase.test(watch('password'))
                                                ? '#98A2B3'
                                                : 'none'
                                        }
                                    />
                                    <span className="block text-mobxs font-bold text-primary-400">
                                        Uppercase letter
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconProvider
                                        name="Circle"
                                        size={13}
                                        fill={
                                            hasLowercase.test(watch('password'))
                                                ? '#98A2B3'
                                                : 'none'
                                        }
                                    />
                                    <span className="block text-mobxs font-bold text-primary-400">
                                        Lowercase letter
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconProvider
                                        name="Circle"
                                        size={13}
                                        fill={
                                            hasNumber.test(watch('password')) ? '#98A2B3' : 'none'
                                        }
                                    />
                                    <span className="block text-mobxs font-bold text-primary-400">
                                        Number
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconProvider
                                        name="Circle"
                                        size={13}
                                        fill={
                                            hasSpecialChars.test(watch('password'))
                                                ? '#98A2B3'
                                                : 'none'
                                        }
                                    />
                                    <span className="block text-mobxs font-bold text-primary-400">
                                        Special character {'(e.g. !?<>@#$%)'}
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconProvider
                                        name="Circle"
                                        size={13}
                                        fill={
                                            greaterThanSevenChars.test(watch('password'))
                                                ? '#98A2B3'
                                                : 'none'
                                        }
                                    />
                                    <span className="block text-mobxs font-bold text-primary-400">
                                        {'>'} 7 character
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={!isDirty}
                    className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
                >
                    Sign Up
                </button>
            </form>
        </Wrapper>
    )
}
