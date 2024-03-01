import { router, publicProcedure } from '../trpc'
import { createUserSchema, userSchema } from '../lib/zod.lib'
import { prisma } from '../lib/prisma.lib'

export const userRouter = router({
    signup: publicProcedure.input(createUserSchema).mutation(async (opts) => {
        const { input } = opts

        const user = await prisma.user.findUnique({
            where: {
                email: input.email,
            },
            select: {
                id: true,
                email: true,
                username: true,
            },
        })

        if (!user) {
            const user = await prisma.user.create({ data: input })
            return {
                message: 'User created!',
                user,
            }
        } else {
            return { message: 'This user already exist!', user }
        }
    }),

    login: publicProcedure.input(userSchema).mutation(async (opts) => {
        const { input } = opts

        // TODO:
        // There are alot of things that should happen here.
        // This is just to test user creation.
        const isUser = await prisma.user.findUnique({
            where: {
                email: input.email,
            },
        })
        return {
            message: 'USER LOGINED',
        }
    }),
})
