import Link from 'next/link'

import { authenticate } from '@/lib/actions'

import { GithubIcon } from '@/components/icons/outline'
import Title from '@/components/auth/title'
import SignUpForm from '@/components/auth/signupForm'

export default function SignUpPage() {
    return (
        <div className="flex w-full flex-col justify-center md:w-[330px] lg:w-[380px]">
            <Title title="Get started" message="Create a new account" />
            <div className="flex flex-col gap-5">
                <button
                    className="flex w-full items-center justify-center rounded-md border bg-primary-200
                            px-4 py-2
                            text-mobmd shadow-sm transition-all hover:bg-primary-800 hover:text-white"
                    type="button"
                >
                    <GithubIcon />
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

                <div>
                    <SignUpForm auth={authenticate} />
                </div>

                <div className="text-center text-mobsm">
                    <span>Have an account? </span>
                    <Link href="/sign-in" className="font-medium">
                        Sign in now
                    </Link>
                </div>
            </div>
        </div>
    )
}
