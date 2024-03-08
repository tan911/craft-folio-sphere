import { IconProvider } from '../icons'

type Values<T> = T[keyof T]

type DisplayIconType = {
    success: 'success'
    warning: 'warning'
    error: 'error'
    pending: 'pending'
}

export default function display({ IconName }: { IconName: string }) {
    return (
        <div>
            <div>{/* <IconProvider name={name} size={18} /> */}</div>
            <div>
                <h3>Message title</h3>
                <p>sdfsfdsfdsfdsfs</p>
            </div>
        </div>
    )
}
