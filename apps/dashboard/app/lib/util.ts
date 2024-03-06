import { AuthResult } from '@repo/types'

/**
 * @param action
 * @param message
 * @param status
 * @returns
 */
export const createAuthResult = ({ action, message, status }: AuthResult) => ({
    action,
    message,
    status,
})
