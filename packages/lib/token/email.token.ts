import { EmailTemplate } from '@repo/ui/template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail({ email, token }: { email: string; token: string }) {
    const confirmationLink = `http://localhost:3000/confirm?token=${token}`

    try {
        await resend.emails.send({
            from: 'CFS <onboarding@resend.dev>',
            to: email,
            subject: 'CFS email verification required',
            react: EmailTemplate({ email, link: confirmationLink }),
        })
    } catch (error) {
        return Response.json({ error })
    }
}
