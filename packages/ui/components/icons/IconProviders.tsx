import { icons } from 'lucide-react'

type IconProvidersProps = {
    name: keyof typeof icons
    color?: string
    size: number
    fill?: string
    className?: string
}

export const IconProvider = ({ name, color, size, fill, className }: IconProvidersProps) => {
    const LucideIcon = icons[name]
    return <LucideIcon color={color} size={size} fill={fill} className={className} />
}
