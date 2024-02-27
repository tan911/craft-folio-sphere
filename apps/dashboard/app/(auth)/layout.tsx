export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen w-screen items-center md:flex-row">
            <div className="md:border-r-1 w-full px-5 md:flex md:h-full md:flex-1 md:flex-col md:items-center md:justify-center md:px-20">
                <div className="md:self-start">CRATFOLIOSPHERE</div>
                <div>{children}</div>
            </div>
            <div className="hidden h-full w-full bg-primary-100 md:flex md:items-center md:justify-center">
                section
            </div>
        </main>
    )
}
