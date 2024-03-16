/* eslint-disable no-redeclare */
import { Styles } from './style'
import {
    Head,
    Heading,
    Container,
    Html,
    Link,
    Body,
    Preview,
    Section,
    Text,
} from '@react-email/components'

export function EmailTemplate({ email, link }: { email: string; link: string }) {
    return (
        <Html>
            <Head />
            <Preview>Craftfoliosphere</Preview>
            <Body style={Styles.wrapper}>
                <Container style={Styles.container}>
                    <Heading style={Styles.heading}>{email}</Heading>
                    <Section style={Styles.innerContainer}>
                        <Text style={Styles.innerContainerText}>
                            You have one more step remaining to activate your CFS account. Click on
                            the button below to verify your email address:
                        </Text>
                    </Section>
                    <Link href={link} style={Styles.link}>
                        Verify email
                    </Link>
                    <Text style={{ marginBottom: '10px' }}>
                        Didn’t work? Copy the link below into your web browser:
                    </Text>
                    <Text>{link}</Text>
                </Container>
            </Body>
        </Html>
    )
}
