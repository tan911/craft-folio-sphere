import { z } from 'zod'

const lowerCaseRegex = /(?=.*[a-z])\w+/g
const upperCaseRegex = /(?=.*[A-Z])\w+/g
const numberRegex = /(?=.*\d)\w+/g
const specialCharacterRegex = /(?=.*[\W_])\w+/g

const passwordSchema = z
    .string({ required_error: 'Password is a required field' })
    .min(7, { message: 'Password must be at least 8 characters' })
    .regex(lowerCaseRegex, 'Password must contain at least 1 lowercase letter')
    .regex(upperCaseRegex, 'Password must contain at least 1 uppercase letter')
    .regex(numberRegex, 'Password must contain at least 1 number')
    .regex(specialCharacterRegex, 'Password must contain at least 1 symbol')

export const createUserSchema = z.object({
    username: z.string({ required_error: 'Name is a required field' }),
    email: z
        .string({ required_error: 'Email is a required field' })
        .email('Email must be a valid email'),
    password: passwordSchema,
})

export const userSchema = z.object({
    email: z.string({ required_error: 'Email is required' }).email('Must be a valid email'),
    password: z.string({ required_error: 'Password is required' }),
})

const VALUES = ['Active', 'Inactive'] as const

export const createProjectSchema = z.object({
    name: z
        .string({ required_error: 'Name of the project is required' })
        .min(3, { message: 'Must be 3 or more characters long' })
        .max(45, { message: 'Must be 5 or fewer characters long' }),
    description: z.string().min(15, { message: 'Add a little description of this project' }),
    image: z.string(),
    techStack: z.string(),
    status: z.enum(VALUES),
})
