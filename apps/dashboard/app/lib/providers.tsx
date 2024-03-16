'use client'

import { type ReactNode, useState } from 'react'
import { AuthContext } from '@/context/authContext'
import { AuthResult } from '@repo/types'
import { SessionProvider } from 'next-auth/react'

export function AppProviders({ children }: { children: ReactNode }) {
    const [userActionStatus, setUserActionStatus] = useState<AuthResult | undefined>(undefined)

    const handleActionStatus = (status: AuthResult) => {
        setUserActionStatus(status)
    }

    const handleActionReset = () => {
        setUserActionStatus(undefined)
    }

    return (
        <SessionProvider>
            <AuthContext.Provider
                value={{ handleActionStatus, handleActionReset, userActionStatus }}
            >
                {children}
            </AuthContext.Provider>
        </SessionProvider>
    )
}
