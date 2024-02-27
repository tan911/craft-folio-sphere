export default function Title({ title, message }: { title: string; message: string }) {
    return (
        <div className="mb-10">
            <h1 className="mb-2 mt-8 text-xs lg:text-mobxl">{title}</h1>
            <h2 className="text-mobsm font-light">{message}</h2>
        </div>
    )
}
