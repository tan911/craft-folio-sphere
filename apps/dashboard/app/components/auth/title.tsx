export default function Title({
    headerLabel,
    messageLabel,
}: {
    headerLabel: string
    messageLabel: string
}) {
    return (
        <div className="mb-10">
            <h1 className="mb-2 mt-8 text-xs lg:text-mobxl">{headerLabel}</h1>
            <h2 className="text-mobsm font-light">{messageLabel}</h2>
        </div>
    )
}
