import { z } from 'zod'

export const hasUppercase = /(?=.*[A-Z])/g
export const hasLowercase = /(?=.*[a-z])/g
export const hasNumber = /(?=.*\d)/g
export const hasSpecialChars = /(?=.*[!<>@#$%^&*])/g
export const greaterThanSevenChars = /^(?=.{8,})/g

const passwordSchema = z
    .string({ required_error: 'Password is a required field' })
    .min(7, { message: 'Password must be at least 8 characters' })
    .regex(hasLowercase, 'Password must contain at least 1 lowercase letter')
    .regex(hasUppercase, 'Password must contain at least 1 uppercase letter')
    .regex(hasNumber, 'Password must contain at least 1 number')
    .regex(hasSpecialChars, 'Password must contain at least 1 symbol')

export const createUserSchema = z.object({
    username: z.string({ required_error: 'Name is a required field' }),
    email: z
        .string({ required_error: 'Email is a required field' })
        .email('Email must be a valid email'),
    password: passwordSchema,
})

export const userSchema = z.object({
    email: z.string({ required_error: 'Email is a required' }).email('Must be a valid email'),
    password: z.string({ required_error: 'Password is a required' }),
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
