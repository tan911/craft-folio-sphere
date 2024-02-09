import { mergeRouters } from '../trpc'
import { userRouter } from './user.route'
import { userDataRouter } from './user-data.route'

export const appRouter = mergeRouters(userRouter, userDataRouter)

export type AppRouter = typeof appRouter
