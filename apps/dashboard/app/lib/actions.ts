'use server'

import { redirect } from 'next/navigation'
import * as auth from '@/auth'

export async function authenticate(formData: FormData) {
    // Make sure users input is valid

    //testing server actions*
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log(email, password)

    // redirect the user to dashboard page
    redirect('/dashboard')
}

export async function signIn() {
    try {
        await auth.signIn('github')
    } catch (error) {
        return 'something went wrong'
    }
}

export async function signOut() {
    try {
        await auth.signOut()
    } catch (error) {
        return 'something went wrong'
    }
}
