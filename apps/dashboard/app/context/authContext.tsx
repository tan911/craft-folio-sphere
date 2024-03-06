'use client'

import { createContext } from 'react'
import { AuthResult } from '@repo/types'

export type Action = {
    // eslint-disable-next-line no-unused-vars
    handleActionStatus: (status: AuthResult) => void
    handleActionReset: () => void
    userActionStatus: AuthResult | undefined
}

export const action: Action = {
    handleActionStatus: () => {},
    handleActionReset: () => {},
    userActionStatus: undefined,
}

export const AuthContext = createContext<Action>(action)
