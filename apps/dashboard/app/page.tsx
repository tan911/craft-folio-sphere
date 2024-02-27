import Link from 'next/link'

export default function Home() {
    return (
        <main className="mx-auto flex h-screen flex-col items-center justify-center gap-3 px-5 sm:container">
            <div className="max-w-[900px] text-center">
                <h1 className="text-md md:text-lg lg:text-xl">
                    <span className="block">My portfolio management tool</span>
                    <span className="block text-brand-600">
                        Built for Efficiency and Scalability
                    </span>
                </h1>
                <p className="my-3">
                    This app showcases my ability to design and develop efficient, scalable
                    applications. It leverages powerful features like: Postgres Database,
                    Authentication, Instant APIs, Responsive design, Adaptable Growth.
                </p>
            </div>
            <div className="flex flex-row gap-2">
                <Link
                    href="/sign-in"
                    className="shadown-md rounded-md bg-brand-600 px-4 py-2 text-mobsm text-white hover:bg-brand-700 md:text-mobmd"
                >
                    Get started
                </Link>
                <Link
                    href="/"
                    className="shadown-md rounded-md bg-primary-800 px-4 py-2 text-mobsm text-white hover:bg-primary-900 md:text-mobmd"
                >
                    Documentation
                </Link>
            </div>
        </main>
    )
}
