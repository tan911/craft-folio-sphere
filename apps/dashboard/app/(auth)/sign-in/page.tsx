'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import clsx from 'clsx'

import Title from '@/components/auth/title'
import Wrapper from '@/components/auth/wrapper'
import { userSchema } from '@repo/lib/index'
import { trpc } from '@/trpc/trpc'

export default function SignInPage() {
    const createdUser = trpc.signIn.useMutation()
    const {
        handleSubmit,
        register,
        formState: { errors, isDirty },
    } = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        mode: 'onTouched',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleFormSubmit: SubmitHandler<z.infer<typeof userSchema>> = (data) => {
        createdUser.mutate(data)
    }

    return (
        <Wrapper
            authType="signIn"
            header={<Title headerLabel="Welcom back" messageLabel="Sign in to your account" />}
        >
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
                    />
                    <div id="password-error-message" aria-live="polite">
                        <span className="block text-mobxs font-bold text-error-500">
                            {errors.password?.message}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!isDirty}
                    className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
                >
                    Sign In
                </button>
            </form>
        </Wrapper>
    )
}
