import Profile from './profile'

export default function Logo() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-2">
                <div className="border border-primary-300 w-[30px] h-[30px]"></div>
                <p className="text-mobxl font-bold text-primary-900">CRAFTFOLIO</p>
            </div>
            <Profile />
        </div>
    )
}
