import Title from '@/components/auth/title.auth'
import Wrapper from '@/components/auth/wrapper.auth'

import SignInForm from '@/components/auth/signIn.auth'

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
