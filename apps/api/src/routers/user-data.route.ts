import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { prisma } from '../lib/prisma.lib'

export const userDataRouter = router({
    getUserProfile: publicProcedure.input(z.string()).query(async (opts) => {
        const { ctx, input } = opts

        const userProfile = await prisma.user.findUnique({
            where: {
                id: input,
                email: ctx.req.body.email,
            },
            select: {
                about: {
                    select: {
                        title: true,
                        description: true,
                    },
                },
                work: {
                    select: {
                        position: true,
                        companyName: true,
                        location: true,
                        startDate: true,
                        endDate: true,
                    },
                },
                project: {
                    select: {
                        name: true,
                        description: true,
                        techStack: true,
                        status: true,
                        image: true,
                        updatedAt: true,
                    },
                },
                profile: {
                    select: {
                        firstName: true,
                        lastName: true,
                        socials: true,
                    },
                },
            },
        })

        if (!userProfile) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'No profile found with this user!',
            })
        }

        return userProfile
    }),
})
