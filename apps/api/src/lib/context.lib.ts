import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'

async function getUser() {
    // const userProfile = await prisma.user.findUnique({
    //       where: {
    //           id: input,
    //           email: ctx.req.body.email,
    //       },
    //       select: {
    //           about: {
    //               select: {
    //                   title: true,
    //                   description: true,
    //               },
    //           },
    //           work: {
    //               select: {
    //                   position: true,
    //                   companyName: true,
    //                   location: true,
    //                   startDate: true,
    //                   endDate: true,
    //               },
    //           },
    //           project: {
    //               select: {
    //                   name: true,
    //                   description: true,
    //                   techStack: true,
    //                   status: true,
    //                   image: true,
    //                   updatedAt: true,
    //               },
    //           },
    //           profile: {
    //               select: {
    //                   firstName: true,
    //                   lastName: true,
    //                   socials: true,
    //               },
    //           },
    //       },
    //   })
}

export async function createContext({ req, res }: CreateExpressContextOptions) {}
