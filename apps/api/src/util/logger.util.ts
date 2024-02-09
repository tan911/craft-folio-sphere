import { createLogger as _createLogger, transports as _transports, format, config } from 'winston'
import type { LoggerOptions, Logger } from 'winston'

const createLogger = (opts?: LoggerOptions): Logger => {
    const defaultTransport = new _transports.Console({
        format:
            process.env.NODE_ENV !== 'production'
                ? format.combine(format.colorize(), format.simple())
                : format.json(),
    })

    const transports = !opts?.transports
        ? defaultTransport
        : Array.isArray(opts.transports)
          ? [defaultTransport, ...opts.transports]
          : [defaultTransport, opts.transports]

    return _createLogger({ ...opts, transports })
}

const logger = createLogger({
    level: 'verbose',
})

export { logger }
