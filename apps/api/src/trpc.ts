import { initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { verifyJWTToken } from '@repo/lib/token'
import { prisma } from '@repo/prisma'

export const createContext = async ({ req }: trpcExpress.CreateExpressContextOptions) => {
    async function getUserFromHeader() {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1]
            const jwt = await verifyJWTToken(token as string)
            const user = await prisma.user.findUnique({
                where: {
                    id: jwt.id,
                },
            })

            return user
        }

        return null
    }

    const user = await getUserFromHeader()
    return { user }
}

type Context = Awaited<ReturnType<typeof createContext>>
const t = initTRPC.context<Context>().create()

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'You must be a user' })
    }

    return next({
        ctx: {
            ...ctx,
            user: ctx.user,
        },
    })
})

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export const mergeRouters = t.mergeRouters
