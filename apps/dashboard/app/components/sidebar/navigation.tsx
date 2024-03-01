import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@repo/ui/icons'

const navigation = [
    {
        label: '',
        route: [
            { name: 'Dashboard', href: '/dashboard', icon: <Icon name="layout-grid" size={24} /> },
            {
                name: 'Account',
                href: '/dashboard/account',
                icon: <Icon name="user-cog" size={24} />,
            },
        ],
    },
    {
        label: 'Portfolio',
        route: [
            {
                name: 'Projects',
                href: '/dashboard/projects',
                icon: <Icon name="layers-3" size={24} />,
            },
            { name: 'Works', href: '/dashboard/works', icon: <Icon name="briefcase" size={24} /> },
        ],
    },
    {
        label: 'Support',
        route: [
            { name: 'Docs', href: '/dashboard/docs', icon: <Icon name="file" size={24} /> },
            { name: 'FAQ', href: '/dashboard/faq', icon: <Icon name="file-question" size={24} /> },
        ],
    },
]

export default function Navigation() {
    const pathName = usePathname()
    return (
        <nav>
            <ul>
                {navigation.map((nav) => {
                    return (
                        <li className="py-2" key={nav.label}>
                            <div className="flex h-8 items-center">
                                <p className="text-mobsm uppercase text-primary-400">{nav.label}</p>
                            </div>
                            <div className="w-full">
                                {nav.route.map((link) => {
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={clsx(
                                                'relative flex h-10 w-full items-center gap-3 rounded-md px-3 py-2',
                                                {
                                                    'bg-primary-100 font-semibold text-primary-500 shadow-sm':
                                                        pathName === link.href,
                                                }
                                            )}
                                        >
                                            {link.icon}
                                            {link.name === 'Docs' && (
                                                <Icon
                                                    name="chevron-right"
                                                    className="absolute right-[12px] w-5"
                                                />
                                            )}
                                            <p>{link.name}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
