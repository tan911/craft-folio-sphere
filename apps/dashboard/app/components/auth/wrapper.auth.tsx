'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useContext, useState } from 'react'

import { IconProvider } from '@repo/ui/icons'
import { AuthBtnType, AuthType, actionStatus, loggingStatus } from '@repo/types'
import * as auth from '@/lib/actions'
import { AuthContext } from '@/context/authContext'

type AuthFormWrapperProps = {
    authBtn: AuthBtnType
    header: React.ReactNode
    children: React.ReactNode
}

type ButtonLabelProps = {
    toButtonLabel: string
    toButtonMessage: string
    to: string
}

function ButtonToRedirect({ toButtonLabel, toButtonMessage, to }: ButtonLabelProps) {
    return (
        <div className="text-center text-mobsm">
            <span>{toButtonMessage}</span>
            <Link href={to} className="font-medium">
                <u>{toButtonLabel}</u>
            </Link>
        </div>
    )
}

export default function Wrapper({ header, children, authBtn }: AuthFormWrapperProps) {
    const { userActionStatus, handleActionStatus, handleActionReset } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const handleOAuthProvider = async (authType: AuthType) => {
        setIsLoading(true)
        handleActionStatus({
            action: true,
            message: actionStatus.LOGGING_IN,
            status: loggingStatus.LOADING,
        })

        try {
            await auth.signIn(authType)

            if (userActionStatus?.status === loggingStatus.LOADING) {
                setIsLoading(true)
            }
        } catch (error) {
            setIsLoading(false)
            handleActionStatus({
                action: true,
                message: actionStatus.REGISTER_ERROR,
                status: loggingStatus.ERROR,
            })
        }
    }

    return (
        <>
            <div className="flex w-full flex-col justify-center md:w-[330px] lg:w-[380px]">
                {header}
                <div className="flex flex-col gap-5">
                    <button
                        onClick={() => handleOAuthProvider('github')}
                        className="relative flex w-full items-center justify-center rounded-md border
                            bg-primary-200 px-4
                            py-2 text-mobmd shadow-sm transition-all hover:bg-primary-800 hover:text-white"
                        type="button"
                    >
                        {isLoading ? (
                            <IconProvider
                                name="Loader2"
                                fill="none"
                                size={20}
                                color="gray"
                                className="absolute left-[22%] animate-spin"
                            />
                        ) : (
                            <IconProvider
                                name="Github"
                                size={18}
                                fill="none"
                                className="absolute left-[22%]"
                            />
                        )}

                        <span className="ml-2">Continue with github</span>
                    </button>

                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t-[1px] border-primary-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-2 text-mobsm">or</span>
                        </div>
                    </div>

                    <div>{children}</div>

                    {authBtn === 'signIn' && (
                        <ButtonToRedirect
                            toButtonLabel="Sign up now"
                            toButtonMessage="Don't have an account? "
                            to="/sign-up"
                        />
                    )}
                    {authBtn === 'signUp' && (
                        <ButtonToRedirect
                            toButtonLabel="Sign in now"
                            toButtonMessage="Have an account? "
                            to="/sign-in"
                        />
                    )}
                </div>
            </div>
            <div
                className={clsx(
                    'absolute right-5 top-5 rounded-md  bg-white text-primary-900 opacity-0 drop-shadow-2xl transition-all',
                    { 'visible opacity-100': userActionStatus?.action },
                    { invisible: !userActionStatus }
                )}
            >
                <div className="flex items-center gap-4 rounded-md border px-3 py-2">
                    <div className="flex items-center gap-2">
                        {userActionStatus?.status === 'loading' ? (
                            <IconProvider
                                name="Loader2"
                                fill="none"
                                size={20}
                                color="gray"
                                className="animate-spin"
                            />
                        ) : userActionStatus?.status === 'success' ? (
                            <IconProvider name="CheckCircle2" fill="none" size={20} color="green" />
                        ) : (
                            <IconProvider name="XCircle" fill="red" size={20} color="white" />
                        )}

                        <p>{userActionStatus?.message}</p>
                    </div>
                    <button
                        type="button"
                        className="rounded-md border border-transparent p-[3px] hover:border hover:border-primary-200"
                        onClick={() => handleActionReset()}
                    >
                        <IconProvider name="X" size={15} color="gray" />
                    </button>
                </div>
            </div>
        </>
    )
}
