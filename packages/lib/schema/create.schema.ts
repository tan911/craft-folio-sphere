import { z } from 'zod'

const VALUES = ['Active', 'Inactive'] as const

export const createProjectSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is a required field' })
        .max(45, { message: 'Must be 5 or fewer characters long' }),
    description: z
        .string()
        .min(1, { message: 'Description is required field' })
        .min(15, { message: 'Add a little description of this project' }),
    image: z.string().min(1, { message: 'Image is a required field' }),
    techStack: z.string().min(1, { message: 'Technologies is a required field' }),
    status: z.enum(VALUES),
})
