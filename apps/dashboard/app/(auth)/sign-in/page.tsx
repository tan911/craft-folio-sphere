'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import * as actions from '@/lib/actions'
import { auth } from '@/auth'
import Title from '@/components/auth/title'
import Wrapper from '@/components/auth/wrapper'
import { userSchema } from '@/lib/zod'

export default function SignInPage() {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    // for oauth
    // const session = await auth()

    return (
        <Wrapper
            authType="signIn"
            header={<Title headerLabel="Welcom back" messageLabel="Sign in to your account" />}
        >
            <form className="flex flex-col gap-4">
                <div className="flex w-full flex-col gap-1">
                    <label htmlFor="email" className="block text-mobsm">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full rounded-md border border-primary-300 bg-primary-100 px-3 py-2"
                        name="email"
                        aria-describedby="email-error-message"
                        required
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
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        className="w-full rounded-md border border-primary-300 bg-primary-100 px-3 py-2"
                        aria-describedby="password-error-message"
                        required
                    />
                    <div id="password-error-message" aria-live="polite">
                        <span className="block text-mobxs font-bold text-error-500">
                            {errors.password?.message}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
                >
                    Sign In
                </button>
            </form>
        </Wrapper>
    )
}
