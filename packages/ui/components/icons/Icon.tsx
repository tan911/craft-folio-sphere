import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

function Fallback() {
    return <div style={{ background: '#ddd', width: 24, height: 24 }} />
}

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

export const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])

    return (
        <Suspense fallback={<Fallback />}>
            <LucideIcon {...props} />
        </Suspense>
    )
}
