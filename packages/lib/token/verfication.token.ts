import { prisma } from '@repo/prisma'
import { v4 as uuid } from 'uuid'
import { setTokenExpiration } from './expiration.token'

type VerificationToken = {
    email?: string
    token?: string
}

export async function generateVerificationToken(email: string) {
    const token = uuid()
    const tokenExpiration = setTokenExpiration(15)
    const isUserhasExistingToken = await getVerificationToken({ email })

    if (isUserhasExistingToken) {
        await prisma.verificationToken.delete({
            where: {
                id: isUserhasExistingToken.id,
            },
        })
    }

    const verificationToken = await prisma.verificationToken.create({
        data: {
            email,
            token,
            expires: tokenExpiration,
        },
    })

    return verificationToken
}

export async function getVerificationToken(filter: VerificationToken) {
    // filter the parameter first
    const hasOneProperty = (
        prop: VerificationToken
    ): prop is Pick<VerificationToken, 'email'> | Pick<VerificationToken, 'token'> => {
        const keys = Object.keys(prop)
        return keys.length === 1
    }

    if (!hasOneProperty(filter)) {
        throw new Error('Invalid property: Only one of email or token should be provided')
    }

    try {
        const verificationToken = await prisma.verificationToken.findFirst({
            where: filter,
        })

        return verificationToken
    } catch {
        return null
    }
}
