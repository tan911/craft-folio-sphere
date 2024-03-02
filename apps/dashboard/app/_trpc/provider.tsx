'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState, type ReactNode } from 'react'
import { trpc } from './trpc'

function getBaseUrl() {
    // need more configuration here when it ship to production
    // assume localhost
    return `http://localhost:${process.env.CFS_PORT ?? 5000}`
}

export default function Provider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api`,
                    // You can pass any HTTP headers you wish here
                    async headers() {
                        return {
                            // authorization: getAuthCookie(),
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
