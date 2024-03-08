import { IconProvider } from '../icons'

export default function Notification({ IconName }: { IconName: string }) {
    const name = IconName
    return (
        <div>
            <div>{/* <IconProvider name={name} size={18} /> */}</div>
            <div>
                <h3>message title</h3>
                <p>sdfsfdsfdsfdsfs</p>
            </div>
        </div>
    )
}
