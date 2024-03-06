import { bcrypt } from '@repo/lib/index'
import { router, publicProcedure } from '../trpc'
import { createUserSchema, userSchema } from '@repo/lib/schema'
import { prisma } from '@repo/prisma'
import { getUserByEmail } from '@repo/lib/data'

export const userRouter = router({
    signUp: publicProcedure.input(createUserSchema).mutation(async (opts) => {
        const { input } = opts

        const isUserExist = await getUserByEmail(input.email)

        if (isUserExist) {
            const message = {
                message: 'This user already exist!',
                isSuccess: false,
            }
            return message
        }

        const hashedPassword = await bcrypt.hash(input.password, 10)

        await prisma.user.create({
            data: {
                name: input.username,
                email: input.email,
                password: hashedPassword,
            },
        })

        // temp
        const message = { message: 'User created!', isSuccess: true }
        return message
    }),

    signIn: publicProcedure.input(userSchema).mutation(async (opts) => {
        const { input } = opts

        return {
            message: 'USER LOGINED',
        }
    }),
})
