import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import githubCredentials from './env'

if (!githubCredentials.GITHUB_CLIENT_ID || !githubCredentials.GITHUB_CLIENT_SECRET) {
    throw new Error('Missing github oauth credentials')
}

/* Add additional providers here. (ex. email) */
export default {
    providers: [
        Github({
            clientId: githubCredentials.GITHUB_CLIENT_ID,
            clientSecret: githubCredentials.GITHUB_CLIENT_SECRET,
        }),
    ],
} satisfies NextAuthConfig
