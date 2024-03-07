import { Styles } from './style'

// TODO: Currently the template doesnt display properly in user email so need more
// styling here to fix it
export function EmailTemplate({ email, link }: { email: string; link: string }) {
    return (
        <div style={Styles.wrapper}>
            <div style={Styles.container}>
                <h2 style={Styles.heading}>{email}</h2>
                <div style={Styles.innerContainer}>
                    <p style={Styles.innerContainerText}>
                        You have one more step remaining to activate your CFS account. Click on the
                        button below to verify your email address:
                    </p>
                </div>
                <a href={link} style={Styles.link}>
                    Verify email
                </a>
                <p style={{ marginBottom: '10px' }}>
                    Didn’t work? Copy the link below into your web browser:
                </p>
                <p>{link}</p>
            </div>
        </div>
    )
}
