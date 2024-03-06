import { prisma } from '@repo/prisma'

export async function getUserByEmail(email: string) {
    try {
        return await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
    } catch {
        return null
    }
}
