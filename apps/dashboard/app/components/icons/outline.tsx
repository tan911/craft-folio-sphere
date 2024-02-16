import Image from 'next/image'

export function WorkIcon() {
    return <Image src="/works.svg" width={24} height={24} alt="Icons of Work tab" />
}
export function AccountIcon() {
    return <Image src="/account.svg" alt="Icons of Account tab" width={24} height={24} />
}
export function DashboardIcon() {
    return (
        <Image
            src="/layout.svg"
            width={24}
            height={24}
            alt="Icons of Dashboard tab showing a for boxes layout"
        />
    )
}
export function ProjectIcon() {
    return <Image src="/layers.svg" alt="Icons of Project tab" width={24} height={24} />
}
export function PaperIcon() {
    return <Image src="/docs.svg" alt="Icons of Documentation tab" width={24} height={24} />
}
export function QuestionIcon() {
    return <Image src="/faq.svg" alt="Icons of FAQ tab" width={24} height={24} />
}
