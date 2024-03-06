import { nextAuth } from '@/auth'

export default async function Page() {
    const session = await nextAuth.auth()
    return (
        <div>
            <div>Account Page</div>
            <p>{JSON.stringify(session)}</p>
        </div>
    )
}
