import Title from '@/components/auth/title'
import Wrapper from '@/components/auth/wrapper'

import SignInForm from '@/components/auth/signIn-form'

export default function SignInPage() {
    return (
        <Wrapper
            authBtn="signIn"
            header={<Title headerLabel="Welcom back" messageLabel="Sign in to your account" />}
        >
            <SignInForm />
        </Wrapper>
    )
}
