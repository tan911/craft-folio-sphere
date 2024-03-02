import { TRPCError } from '@trpc/server'
import { createProjectSchema } from '@repo/lib/index'
import { router, publicProcedure } from '../trpc'
import { prisma } from '../lib/prisma.lib'

export const userDataRouter = router({
    createProjects: publicProcedure.input(createProjectSchema).mutation(async (opts) => {
        const { input } = opts
        console.log(opts)
        // await prisma.project.create({ data: input })
    }),

    getProjects: publicProcedure.query(async () => {
        return await prisma.user.findUnique({
            where: {
                id: 'try',
                email: 'try',
            },
            select: {},
        })
    }),
})
