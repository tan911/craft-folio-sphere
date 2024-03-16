import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@repo/prisma'
import { getUserByEmail } from '@repo/lib/data'
import authConfig from './auth.config'

export const nextAuth = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt', maxAge: 864000 },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'credentials') {
                const isUserExist = await getUserByEmail(user.email as string)

                if (isUserExist && !isUserExist.emailVerified) {
                    return false
                }
            }

            return true
        },
        async session({ session, token }) {
            if (session && session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) {
                return token
            }
            return token
        },
    },
    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    emailVerified: new Date(),
                },
            })
        },
    },
})
