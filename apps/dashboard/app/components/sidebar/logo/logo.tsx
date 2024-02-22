import Profile from './profile'

export default function Logo() {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between gap-2">
                <div className="border-primary-300 h-[30px] w-[30px] border"></div>
                <p className="text-mobxl text-primary-900 font-bold">CRAFTFOLIO</p>
            </div>
            <Profile />
        </div>
    )
}
