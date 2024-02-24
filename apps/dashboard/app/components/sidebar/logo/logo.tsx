import Profile from './profile'

export default function Logo() {
    return (
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
            <div className="flex flex-row items-center justify-between gap-2">
                <div className="h-[30px] w-[30px] border border-primary-300"></div>
                <p className="text-mobxl font-bold text-primary-900">CRAFTFOLIO</p>
            </div>
            <Profile />
        </div>
    )
}
