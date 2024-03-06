/**
 * An array of routes that accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ['/']

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ['/sign-in', '/sign-up']

/**
 * The prefix for API authentication routes ex. Github
 * @type {string}
 */
export const apiRoutes = '/api/auth'

/**
 * The default redirect path after logging In
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
