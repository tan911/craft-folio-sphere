const Wrapper = {
    maxWidth: '1440px',
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
} as const

const Container = {
    width: '500px',
    backgroundColor: '#f3f4f6',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
} as const

const Heading = {
    color: '#9ca3af',
} as const

const InnerContainer = {
    textAlign: 'center',
    marginBottom: '20px',
} as const

const InnerContainerText = {
    color: '#0c0a09',
} as const

const Link = {
    display: 'inline-block',
    cursor: 'pointer',
    height: '100%',
    color: '#fff',
    backgroundColor: '#2563eb',
    padding: '10px',
    textDeration: 'none',
} as const

export const Styles = {
    wrapper: Wrapper,
    container: Container,
    heading: Heading,
    innerContainer: InnerContainer,
    innerContainerText: InnerContainerText,
    link: Link,
} as const
