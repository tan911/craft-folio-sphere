import { Button } from '@repo/ui/buttons'
import { Icon } from '@repo/ui/icons'

export default function Header() {
    const handle = () => {
        console.log('logs')
    }
    return (
        <div className="mb-5 flex h-[120px] flex-col gap-2 pb-3 md:mb-0 md:h-[3.75rem] md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="h-full">
                <h1 className="text-xs font-medium text-primary-900">Hello, Jovan</h1>
                <p className="text-mobxs text-primary-500">Monday, Feb 14</p>
            </div>
            <div className="self-start">
                <Button mode="brand" size="base" isIcon={true} type="button" onEvent={handle}>
                    <Icon name="plus" size={24} className="w-5" />
                    New Project
                </Button>
            </div>
        </div>
    )
}
