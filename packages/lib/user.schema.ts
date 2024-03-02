import { z } from 'zod'

export const hasUppercase = /(?=.*[A-Z])/g
export const hasLowercase = /(?=.*[a-z])/g
export const hasNumber = /(?=.*\d)/g
export const hasSpecialChars = /(?=.*[!<>@#$%^&*])/g
export const greaterThanSevenChars = /^(?=.{8,})/g

const passwordSchema = z
    .string()
    .min(1, { message: 'Password is a required field' })
    .min(7, { message: 'Password must be at least 8 characters' })
    .regex(hasLowercase, 'Password must contain at least 1 lowercase letter')
    .regex(hasUppercase, 'Password must contain at least 1 uppercase letter')
    .regex(hasNumber, 'Password must contain at least 1 number')
    .regex(hasSpecialChars, 'Password must contain at least 1 symbol')

export const createUserSchema = z
    .object({
        username: z
            .string()
            .min(1, { message: 'Name is a required field' })
            .min(4, { message: 'Password must be at least 4 characters' }),
        email: z
            .string()
            .min(1, { message: 'Email is a required field' })
            .email('Email must be a valid email'),
        password: passwordSchema,
    })
    .required({
        username: true,
        email: true,
        password: true,
    })

export const userSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: 'Email is a required field' })
            .email('Must be a valid email'),
        password: z.string().min(1, { message: 'Password is a required field' }),
    })
    .required({
        email: true,
        password: true,
    })

const VALUES = ['Active', 'Inactive'] as const

export const createProjectSchema = z.object({
    name: z
        .string({ required_error: 'Name of the project is required' })
        .min(1, { message: 'Must be 3 or more characters long' })
        .max(45, { message: 'Must be 5 or fewer characters long' }),
    description: z.string().min(15, { message: 'Add a little description of this project' }),
    image: z.string(),
    techStack: z.string(),
    status: z.enum(VALUES),
})
