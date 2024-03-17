import { createProjectSchema } from '@repo/lib/schema'
import { router, protectedProcedure } from '../trpc'
// import { prisma } from '@repo/prisma'

export const userDataRouter = router({
    createProjects: protectedProcedure.input(createProjectSchema).mutation(async (opts) => {
        const { input } = opts
        console.log(input)
        // await prisma.project.create({data: input})
    }),

    getProjects: protectedProcedure.query(async () => {
        return { message: 'hello' }
    }),
})
