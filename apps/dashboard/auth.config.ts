import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import credential from './env'
import { userSchema } from '@repo/lib/schema'
import { getUserByEmail } from '@repo/lib/data'
import { bcrypt } from '@repo/lib/index'

if (!credential.GITHUB_CLIENT_ID || !credential.GITHUB_CLIENT_SECRET) {
    throw new Error('Missing github oauth credentials')
}

/* Add additional providers here. (ex. email) */
const authConfig: NextAuthConfig = {
    providers: [
        GitHub({
            clientId: credential.GITHUB_CLIENT_ID,
            clientSecret: credential.GITHUB_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const validateUserCredentials = userSchema.safeParse(credentials)

                if (validateUserCredentials.success) {
                    const { email, password } = validateUserCredentials.data

                    const isUserExist = await getUserByEmail(email)

                    /**
                     * For providers, signing in
                     * through oauth providers ex. github that
                     * doesnt require a password
                     */
                    if (!isUserExist || !isUserExist.password) {
                        return null
                    }

                    const isPasswordMatch = await bcrypt.compare(password, isUserExist.password)

                    if (isPasswordMatch) {
                        return isUserExist
                    }
                }

                return null
            },
        }),
    ],
}

export default authConfig
