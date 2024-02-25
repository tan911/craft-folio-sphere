import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

import { createContext } from './trpc'
import { appRouter } from './routers/_index'
import { logger } from './lib/logger.lib'
import env from './env'

const app = express()

// MIDDLEWARE
app.use(
    morgan(env.CFS_MORGAN_LOGGER, {
        stream: {
            write: (message: string) => {
                logger.http(message.trim())
            },
        },
    })
)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ROUTES
app.use(
    '/cfs',
    createExpressMiddleware({
        router: appRouter,
        createContext,
    })
)

export default app
