import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './app/lib/prisma'

import authConfig from './auth.config'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session({ session, user }: any) {
            if (session && user) {
                session.user.id = user.id
            }

            return session
        },
    },
    ...authConfig,
})
