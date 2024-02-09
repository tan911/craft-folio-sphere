import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    req,
    res,
})

type Context = Awaited<ReturnType<typeof createContext>>
const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const mergeRouters = t.mergeRouters
