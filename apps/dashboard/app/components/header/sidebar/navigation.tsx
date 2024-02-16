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
} from '../../icons/outline'

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
        <div>
            {navigation.map((nav) => {
                return (
                    <div className="py-2">
                        <div className="h-8 flex items-center">
                            <p className="text-mobsm text-primary-400 uppercase">{nav.label}</p>
                        </div>
                        <div className="w-full">
                            {nav.route.map((link) => {
                                const LinkIcon = link.icon
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            'relative flex items-center gap-3 w-full h-10 py-2 px-3 rounded-md',
                                            {
                                                'bg-primary-100 shadow-sm text-primary-500 font-semibold':
                                                    pathName === link.href,
                                            }
                                        )}
                                    >
                                        <LinkIcon />
                                        {link.name === 'Docs' && (
                                            <ArrowTopRightOnSquareIcon className="absolute w-5 right-[12px]" />
                                        )}
                                        <p>{link.name}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
