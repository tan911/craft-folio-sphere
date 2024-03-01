import { icons } from 'lucide-react'

type IconProvidersProps = {
    name: keyof typeof icons
    color?: string
    size: number
    fill?: string
}

export const IconProvider = ({ name, color, size, fill }: IconProvidersProps) => {
    const LucideIcon = icons[name]
    return <LucideIcon color={color} size={size} fill={fill} />
}
