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

export function MenuIcon() {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 12.5H17M3 6.5H21M3 18.5H21"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function DeleteIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.5 4.99984H4.16667M4.16667 4.99984H17.5M4.16667 4.99984V16.6665C4.16667 17.1085 4.34226 17.5325 4.65482 17.845C4.96738 18.1576 5.39131 18.3332 5.83333 18.3332H14.1667C14.6087 18.3332 15.0326 18.1576 15.3452 17.845C15.6577 17.5325 15.8333 17.1085 15.8333 16.6665V4.99984H4.16667ZM6.66667 4.99984V3.33317C6.66667 2.89114 6.84226 2.46722 7.15482 2.15466C7.46738 1.8421 7.89131 1.6665 8.33333 1.6665H11.6667C12.1087 1.6665 12.5326 1.8421 12.8452 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984M8.33333 9.1665V14.1665M11.6667 9.1665V14.1665"
                stroke="#475467"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function EditIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_6742_1922)">
                <path
                    d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z"
                    stroke="#475467"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_6742_1922">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
