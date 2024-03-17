import { mergeRouters } from '../trpc'
import { userDataRouter } from './project.route'

export const appRouter = mergeRouters(userDataRouter)

export type AppRouter = typeof appRouter
