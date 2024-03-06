'use client'

import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import clsx from 'clsx'

import { AuthContext } from '../../context/authContext'
import { actionStatus, loggingStatus } from '@repo/types'
import { userSchema } from '@repo/lib/schema'
import { IconProvider } from '@repo/ui/icons'
import * as auth from '@/lib/actions'

export default function SignInForm() {
    const { handleActionStatus } = useContext(AuthContext)
    const {
        handleSubmit,
        register,
        formState: { errors, isDirty, isSubmitting },
    } = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        mode: 'onTouched',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleFormSubmit: SubmitHandler<z.infer<typeof userSchema>> = async (data) => {
        handleActionStatus({
            action: true,
            message: actionStatus.LOGGING_IN,
            status: loggingStatus.LOADING,
        })

        try {
            const userAuth = await auth.signIn('credentials', data)

            if (userAuth?.action && userAuth.status === loggingStatus.SUCCESS) {
                handleActionStatus({
                    action: userAuth.action,
                    message: userAuth.message,
                    status: loggingStatus.SUCCESS,
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
                <label htmlFor="email" className="block text-mobsm">
                    Email
                </label>
                <input
                    {...register('email')}
                    type="text"
                    id="email"
                    placeholder="your@email.com"
                    className={clsx(
                        'w-full rounded-md px-3 py-2',
                        !errors.email?.message && 'border border-primary-300 bg-primary-100',
                        errors.email?.message && 'border border-error-700 bg-error-100'
                    )}
                    name="email"
                    aria-describedby="email-error-message"
                    disabled={isSubmitting}
                />
                <div id="email-error-message" aria-live="polite">
                    <span className="text-mobxs font-bold text-error-500">
                        {errors.email?.message}
                    </span>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="password" className="block text-mobsm">
                    Password
                </label>
                <input
                    {...register('password')}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    className={clsx(
                        'bg w-full rounded-md px-3 py-2',
                        !errors.password?.message && 'border border-primary-300 bg-primary-100',
                        errors.password?.message && 'border border-error-700 bg-error-100'
                    )}
                    aria-describedby="password-error-message"
                    disabled={isSubmitting}
                />
                <div id="password-error-message" aria-live="polite">
                    <span className="block text-mobxs font-bold text-error-500">
                        {errors.password?.message}
                    </span>
                </div>
            </div>
            <button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className="relative flex items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
            >
                {isSubmitting && (
                    <IconProvider
                        name="Loader"
                        size={18}
                        fill="none"
                        className="absolute left-[35%] animate-spin"
                    />
                )}
                Sign In
            </button>
        </form>
    )
}
