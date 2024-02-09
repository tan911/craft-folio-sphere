import { router, publicProcedure } from '../trpc'
import { createUserSchema, userSchema } from '../util/zod.util'

// JUST TO TEST TRPC IF THE ROUTE IS WORKING!
export const userRouter = router({
    signup: publicProcedure.input(createUserSchema).mutation(async (opts) => {
        const { username, email, password } = await opts.input
        return {
            message: 'USER CREATED',
            data: {
                username,
                email,
                password,
            },
        }
    }),
    login: publicProcedure.input(userSchema).mutation(async (opts) => {
        const { email, password } = await opts.input
        return {
            message: 'USER LOGINED',
            name: {
                email,
                password,
            },
        }
    }),
})
