import { router, publicProcedure } from '../trpc'

export const appRouter = router({
    user: publicProcedure
        .use(async ({ ctx, next }) => {
            return next({
                ctx: {
                    ...ctx,
                    user: 'Helo user',
                },
            })
        })
        .query(({ ctx }) => ctx.user),
})

export type AppRouter = typeof appRouter
