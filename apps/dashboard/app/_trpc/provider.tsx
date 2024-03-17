'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { useState, type ReactNode } from 'react'
import { type Session } from 'next-auth'
import { getAuthToken } from '@/lib/actions'
import { trpc } from './trpc'

function getBaseUrl() {
    // need more configuration here when it ship to production
    // assume localhost
    return `http://localhost:${process.env.CFS_PORT ?? 5000}`
}

export default function Provider({ children, session }: { children: ReactNode; session: Session }) {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                loggerLink(),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/user`,
                    async headers() {
                        const token = await getAuthToken(session)
                        return {
                            authorization: `Bearer ${token}`,
                        }
                    },
                }),
            ],
        })
    )

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}
