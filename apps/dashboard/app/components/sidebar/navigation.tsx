import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import {
    DashboardIcon,
    WorkIcon,
    AccountIcon,
    ProjectIcon,
    PaperIcon,
    QuestionIcon,
} from '../icons/outline'

const navigation = [
    {
        label: '',
        route: [
            { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
            { name: 'Account', href: '/dashboard/account', icon: AccountIcon },
        ],
    },
    {
        label: 'Portfolio',
        route: [
            { name: 'Projects', href: '/dashboard/projects', icon: ProjectIcon },
            { name: 'Works', href: '/dashboard/works', icon: WorkIcon },
        ],
    },
    {
        label: 'Support',
        route: [
            { name: 'Docs', href: '/dashboard/docs', icon: PaperIcon },
            { name: 'FAQ', href: '/dashboard/faq', icon: QuestionIcon },
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
                                    const LinkIcon = link.icon
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
                                            <LinkIcon />
                                            {link.name === 'Docs' && (
                                                <ArrowTopRightOnSquareIcon className="absolute right-[12px] w-5" />
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
