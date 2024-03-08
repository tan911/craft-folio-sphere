'use client'

import { useEffect, useCallback, useContext, useState } from 'react'
import { useSearchParams, redirect } from 'next/navigation'
import Link from 'next/link'

import { Action, AuthContext } from '@/context/authContext'
import { IconProvider } from '@repo/ui/icons'
import { verifyConfirmationToken } from '@/lib/actions'

export default function ConfirmationPage() {
    const { handleActionStatus } = useContext<Action>(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [message, setIsMessage] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const handleSubmit = useCallback(() => {
        if (!token) {
            return redirect('/sign-in')
        }

        verifyConfirmationToken(token)
            .then((userAuth) => {
                if (userAuth.action && userAuth.status === 'success') {
                    setIsLoading(false)
                    setIsMessage(userAuth.message)
                    return
                }

                if (userAuth.action && userAuth.status === 'error') {
                    handleActionStatus(userAuth)
                    setIsError(true)
                }
            })
            .catch((err) => Error('Something went wrong!', err))

        if (isError) {
            return redirect('/sign-in')
        }
    }, [token, isError])

    useEffect(() => {
        handleSubmit()
    }, [handleSubmit])

    return (
        <div className="mx-[10px] flex h-screen max-w-lg flex-col items-center justify-center rounded-md md:mx-auto">
            <div className="drop-shadow-xs flex w-full flex-col items-center justify-center gap-5 bg-primary-100 px-3 py-5">
                <h2 className="text-mobmd font-bold text-primary-400">Craftfoliosphere</h2>
                <p>Confirm your verfication</p>

                <div>
                    {isLoading ? (
                        <IconProvider
                            name="Loader2"
                            size={30}
                            className="animate-spin"
                            fill="none"
                        />
                    ) : (
                        <div className="flex items-center gap-2">
                            <IconProvider name="CheckCircle2" fill="none" size={20} color="green" />
                            {message}
                        </div>
                    )}
                </div>

                <Link
                    href="/sign-in"
                    className="rounded-md border border-transparent px-2 py-1.5 hover:border-primary-300 hover:bg-primary-200"
                >
                    Back to login
                </Link>
            </div>
        </div>
    )
}
