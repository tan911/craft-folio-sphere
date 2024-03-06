'use client'

import { useState, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from '@repo/lib/index'
import clsx from 'clsx'

import { AuthContext } from '@/context/authContext'
import { actionStatus, loggingStatus } from '@repo/types'
import * as auth from '@/lib/actions'
import { IconProvider } from '@repo/ui/icons'
import {
    createUserSchema,
    hasLowercase,
    hasNumber,
    hasSpecialChars,
    hasUppercase,
    greaterThanSevenChars,
} from '@repo/lib/schema'

export default function SignUpForm() {
    const { handleActionStatus } = useContext(AuthContext)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const {
        handleSubmit,
        register,
        watch,
        getFieldState,
        formState: { errors, isDirty, isSubmitting },
    } = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        mode: 'onTouched',
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    })

    const handleFormSubmit: SubmitHandler<z.infer<typeof createUserSchema>> = async (data) => {
        //TODO: MAKE THIS ACTION IN SYNC WITH BUTTON LOADER IN SIGN UP
        // FUNCTIONALITY
        handleActionStatus({
            action: true,
            message: actionStatus.LOGGING_IN,
            status: loggingStatus.LOADING,
        })

        try {
            const userAuth = await auth.signUp(data)

            if (userAuth?.action && userAuth.status === loggingStatus.SUCCESS) {
                handleActionStatus({
                    action: userAuth.action,
                    message: userAuth.message,
                    status: userAuth.status,
                })
            } else if (userAuth?.action && userAuth.status === loggingStatus.ERROR) {
                handleActionStatus({
                    action: userAuth.action,
                    message: userAuth.message,
                    status: userAuth.status,
                })
            }
        } catch (error) {
            handleActionStatus({
                action: true,
                message: actionStatus.REGISTER_ERROR,
                status: loggingStatus.ERROR,
            })
        }
    }

    return (
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
                    type={isPasswordVisible ? 'text' : 'password'}
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
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <IconProvider
                        name={isPasswordVisible ? 'EyeOff' : 'Eye'}
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
                                    fill={hasUppercase.test(watch('password')) ? '#98A2B3' : 'none'}
                                />
                                <span className="block text-mobxs font-bold text-primary-400">
                                    Uppercase letter
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconProvider
                                    name="Circle"
                                    size={13}
                                    fill={hasLowercase.test(watch('password')) ? '#98A2B3' : 'none'}
                                />
                                <span className="block text-mobxs font-bold text-primary-400">
                                    Lowercase letter
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconProvider
                                    name="Circle"
                                    size={13}
                                    fill={hasNumber.test(watch('password')) ? '#98A2B3' : 'none'}
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
                                        hasSpecialChars.test(watch('password')) ? '#98A2B3' : 'none'
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
                disabled={!isDirty || isSubmitting}
                className="relative rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
            >
                {isSubmitting && (
                    <IconProvider
                        name="Loader"
                        size={18}
                        fill="none"
                        className="absolute left-[35%] top-[30%] animate-spin"
                    />
                )}
                Sign Up
            </button>
        </form>
    )
}
