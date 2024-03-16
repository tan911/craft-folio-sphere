import { createProjectSchema } from '@repo/lib/schema'
import { router, publicProcedure } from '../trpc'

export const userDataRouter = router({
    createProjects: publicProcedure.input(createProjectSchema).mutation(async (opts) => {
        const { input } = opts
        console.log(input)
        // await prisma.project.create({ data: input })
    }),

    getProjects: publicProcedure.query(async () => {
        return { message: 'hello' }
    }),
})
