'use server'

import { AuthError } from 'next-auth'
import { nextAuth as auth } from '@/auth'
import { userSchema, createUserSchema } from '@repo/lib/schema'
import { getUserByEmail } from '@repo/lib/data'
import { z } from '@repo/lib/index'
import { DEFAULT_LOGIN_REDIRECT } from '@/route'
import { prisma } from '@repo/prisma'
import { bcrypt } from '@repo/lib/index'
import { createAuthResult } from '@/lib/util'
import { AuthType, actionStatus, loggingStatus } from '@repo/types'
import { generateVerificationToken } from '@repo/lib/token'

export async function signIn(authType: AuthType, data?: z.infer<typeof userSchema>) {
    try {
        if (['github'].includes(authType)) {
            // oauth provider
            await auth.signIn(authType, {
                redirectTo: DEFAULT_LOGIN_REDIRECT,
            })
        } else {
            const isUserDataValid = await userSchema.safeParseAsync(data)

            if (!isUserDataValid.success) {
                return createAuthResult({
                    action: true,
                    message: actionStatus.LOGIN_FAILED,
                    status: loggingStatus.ERROR,
                })
            }

            const { email, password } = isUserDataValid.data

            const isUserExist = await getUserByEmail(email)

            if (!isUserExist || !isUserExist.email || !isUserExist.password) {
                return createAuthResult({
                    action: true,
                    message: actionStatus.LOGIN_FAILED,
                    status: loggingStatus.ERROR,
                })
            }

            if (!isUserExist.emailVerified) {
                // TODO:resend email
                // const verificationToken = await generateVerificationToken(isUserExist.email)

                return createAuthResult({
                    action: true,
                    message: actionStatus.EMAIL_SENT,
                    status: loggingStatus.SUCCESS,
                })
            }

            await auth.signIn(authType, {
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT,
            })
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': {
                    return createAuthResult({
                        action: true,
                        message: actionStatus.LOGIN_FAILED,
                        status: loggingStatus.ERROR,
                    })
                }
                default: {
                    return createAuthResult({
                        action: true,
                        message: actionStatus.REGISTER_ERROR,
                        status: loggingStatus.ERROR,
                    })
                }
            }
        }

        throw error
    }
}

export async function signUp(data: z.infer<typeof createUserSchema>) {
    try {
        const isUserDataValid = createUserSchema.safeParse(data)

        if (!isUserDataValid.success) {
            return createAuthResult({
                action: true,
                message: actionStatus.REGISTER_INVALID,
                status: loggingStatus.ERROR,
            })
        }

        const { username, email, password } = isUserDataValid.data

        const isUserExist = await getUserByEmail(email)

        if (isUserExist) {
            return createAuthResult({
                action: true,
                message: actionStatus.USER_EXISTS,
                status: loggingStatus.ERROR,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                name: username,
                email: email,
                password: hashedPassword,
            },
        })

        // TODO:resend email
        // const verificationToken = await generateVerificationToken(email)

        return createAuthResult({
            action: true,
            message: actionStatus.EMAIL_SENT,
            status: loggingStatus.SUCCESS,
        })
    } catch (error) {
        console.log(error)
    }
}

export async function signOut() {
    await auth.signOut()
}
