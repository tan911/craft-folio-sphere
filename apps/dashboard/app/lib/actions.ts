'use server'

import { redirect } from 'next/navigation'

export async function authenticate(formData: FormData) {
    // Make sure users input is valid

    //testing server actions*
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log(email, password)

    // redirect the user to dashboard page
    redirect('/dashboard')
}
