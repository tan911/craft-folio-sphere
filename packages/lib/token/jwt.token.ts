import jwt, { type JwtPayload } from 'jsonwebtoken'

interface Session {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
}

export async function getJWTToken(payload: Session) {
    try {
        return jwt.sign(payload, process.env.AUTH_SECRET as string, {
            expiresIn: 864000, // Expiration will be changed here
            algorithm: 'HS256',
        })
    } catch (error) {
        throw new Error('Something went wrong!')
    }
}

export async function verifyJWTToken(token: string): Promise<JwtPayload> {
    try {
        return jwt.verify(token, process.env.AUTH_SECRET as string) as JwtPayload
    } catch (error) {
        throw new Error('Invalid token. Please log in again!')
    }
}
