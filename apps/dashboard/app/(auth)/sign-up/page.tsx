import Title from '@/components/auth/title.auth'
import Wrapper from '@/components/auth/wrapper.auth'

import SignUpForm from '@/components/auth/signUp.auth'

export default function SignUpPage() {
    return (
        <Wrapper
            authBtn="signUp"
            header={<Title headerLabel="Get started" messageLabel="Create a new account" />}
        >
            <SignUpForm />
        </Wrapper>
    )
}
