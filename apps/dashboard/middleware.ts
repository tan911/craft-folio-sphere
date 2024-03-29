import NextAuth from 'next-auth'
import authConfig from './auth.config'
import { DEFAULT_LOGIN_REDIRECT, apiRoutes, publicRoutes, authRoutes } from './route'

const { auth } = NextAuth(authConfig)

// Typescript always yell about this portable annotations
// Its quite annoying to see this but this also work as expected
// possible cause: version ts compatibility in next-auth
export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiRoutes)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute) {
        return null
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }

        return null
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/sign-in', nextUrl))
    }

    return null
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
