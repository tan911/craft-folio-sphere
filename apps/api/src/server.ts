import app from './app'
import env from './env'
import { logger } from './lib/logger.lib'

process.on('unhandledRejection', (error) => {
    logger.error(`Unhandled Rejection: ${error}`)
})

process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${error}`)
})

const server = app.listen(env.CFS_PORT, () => {
    logger.info(`Server running at \thttp://localhost:${env.CFS_PORT}`)
})

server.on('error', (err) => logger.error('AppServer failed to start from server.ts', err))
