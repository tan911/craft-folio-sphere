import { createProjectSchema } from '@repo/lib/schema'
import { router, protectedProcedure } from '../trpc'
import { prisma } from '@repo/prisma'
import { TRPCError } from '@trpc/server'
import { z } from '@repo/lib/index'

export const userDataRouter = router({
    createProjects: protectedProcedure.input(createProjectSchema).mutation(async (opts) => {
        try {
            const { input, ctx } = opts
            await prisma.project.create({
                data: {
                    user: { connect: { id: ctx.user.id } },
                    name: input.name,
                    description: input.description,
                    status: input.status,
                    techStack: [input.techStack],
                    image: input.image,
                },
            })

            return { message: 'Project created successfully!' }
        } catch (error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Failed to create a project',
            })
        }
    }),

    getProjects: protectedProcedure
        .input(
            z.object({
                currentPage: z.number(),
                itemsPerPage: z.number(),
            })
        )
        .query(async (opts) => {
            try {
                const { ctx } = opts
                const { currentPage, itemsPerPage } = opts.input

                const [pagination, data] = await prisma.$transaction([
                    prisma.project.count({
                        where: {
                            projectId: ctx.user.id,
                        },
                    }),
                    prisma.project.findMany({
                        skip: (currentPage - 1) * itemsPerPage,
                        take: itemsPerPage,
                        where: {
                            projectId: ctx.user.id,
                        },
                        orderBy: {
                            updatedAt: 'desc',
                        },
                    }),
                ])

                const modifiedData = data.map((item) => {
                    return {
                        ...item,
                        isChecked: false,
                    }
                })

                return { total: pagination, data: modifiedData }
            } catch (error) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Failed to get a project',
                })
            }
        }),
})
