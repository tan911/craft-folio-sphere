import Title from '@/components/auth/title'
import Wrapper from '@/components/auth/wrapper'

import SignUpForm from '@/components/auth/signUp-form'

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
