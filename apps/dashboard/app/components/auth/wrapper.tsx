import Link from 'next/link'
import { IconProvider } from '@repo/ui/icons'

type AuthFormWrapperProps = {
    authType: 'signIn' | 'signUp'
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

export default function Wrapper({ header, children, authType }: AuthFormWrapperProps) {
    return (
        <div className="flex w-full flex-col justify-center md:w-[330px] lg:w-[380px]">
            {header}
            <div className="flex flex-col gap-5">
                <button
                    className="flex w-full items-center justify-center rounded-md border bg-primary-200
                            px-4 py-2
                            text-mobmd shadow-sm transition-all hover:bg-primary-800 hover:text-white"
                    type="button"
                >
                    <IconProvider name="Github" size={18} fill="none" />
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

                {authType === 'signIn' && (
                    <ButtonToRedirect
                        toButtonLabel="Sign up now"
                        toButtonMessage="Don't have an account? "
                        to="/sign-up"
                    />
                )}
                {authType === 'signUp' && (
                    <ButtonToRedirect
                        toButtonLabel="Sign in now"
                        toButtonMessage="Have an account? "
                        to="/sign-in"
                    />
                )}
            </div>
        </div>
    )
}
