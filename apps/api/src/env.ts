import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    CFS_PORT: z.string().default('5000'),
    CFS_MORGAN_LOGGER: z
        .string()
        .default(process.env.NODE_ENV === 'development' ? 'dev' : 'common'),
})

export default envSchema.parse(process.env)
