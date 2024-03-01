/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { PrismaClient } from '@repo/prisma'

declare global {
    var prismaGlobal: PrismaClient | undefined
}

export const prisma = globalThis.prismaGlobal || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
