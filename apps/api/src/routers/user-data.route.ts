import { router, publicProcedure } from '../trpc'
import { prisma } from '../util/prisma.util'

// JUST TO TEST TRPC IF THE ROUTE IS WORKING!
export const userDataRouter = router({
    getUserProfile: publicProcedure.query(async () => {
        const userProfile = await prisma.user.findUnique({
            where: {
                id: 1,
            },
        })

        return userProfile
    }),
})
