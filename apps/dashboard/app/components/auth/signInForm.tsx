export default function SignInForm() {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="email" className="block text-mobsm">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-primary-300 bg-primary-100 px-3 py-2"
                    name="email"
                    aria-describedby="email-error-message"
                    required
                />
                <div className="hidden" id="email-error-message" aria-live="polite">
                    <span className="text-mobxs font-bold text-error-500">
                        Email is a required field
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
                <div className="hidden" id="password-error-message" aria-live="polite">
                    <span className="block text-mobxs font-bold text-error-500">
                        Password is a required field
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
    )
}
