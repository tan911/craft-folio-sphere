type Values<T> = T[keyof T]

export const loggingStatus = {
    SUCCESS: 'success',
    LOADING: 'loading',
    ERROR: 'error',
} as const

export const actionStatus = {
    LOGIN_FAILED: 'Invalid login credentials',
    REGISTER_INVALID: 'Invalid fields',
    REGISTER_ERROR: 'Registration failed',
    LOGGING_IN: 'Signing in...',
    USER_EXISTS: 'Email already exists',
    USER_CREATED: 'Account created',
    EMAIL_SENT: 'Email verification sent',
    USER_DOESNT_EXIST: 'Email of this user does not exists',
    TOKEN_EXPIRED: 'Your confirmation link is no longer valid',
    TOKEN_DOESNT_EXIST: 'Token for this user does not exists',
    EMAIL_VERIFIED: 'Email verified',
} as const

export const authUser = {
    SIGNIN: 'signIn',
    SIGNUP: 'signUp',
} as const

export type AuthType = 'github' | 'credentials'

export type AuthResult = {
    action: boolean
    message: Values<typeof actionStatus>
    status: Values<typeof loggingStatus>
}

export type AuthBtnType = (typeof authUser)[keyof typeof authUser]
