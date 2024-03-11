import { render, screen, within } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import user from '@testing-library/user-event'
import Home from '../app/page'

describe('It should display text and buttons redirections when navigating to hame page', () => {
    test('It shows text and two buttons', () => {
        render(<Home />)

        const main = within(screen.getByRole('main'))
        const buttonLinks = main.getAllByRole('link')
        const buttonLinkStarted = main.getByRole('link', { name: /Get started/i })
        const buttonLinkDocumentation = main.getByRole('link', { name: /Documentation/i })
        const text = main.getByText(
            'This app showcases my ability to design and develop efficient, scalable applications. It leverages powerful features like: Postgres Database, Authentication, Instant APIs, Responsive design, Adaptable Growth.'
        )

        user.click(buttonLinkStarted)
        user.click(buttonLinkDocumentation)

        expect(
            main.getByRole('heading', {
                level: 1,
                name: /My portfolio management tool Built for Efficiency and Scalability/i,
            })
        ).toBeVisible()
        expect(text).toBeVisible()
        expect(text).toBeInTheDocument()
        expect(buttonLinkStarted).toBeVisible()
        expect(buttonLinkStarted).toBeInTheDocument()
        expect(buttonLinkDocumentation).toBeVisible()
        expect(buttonLinkDocumentation).toBeInTheDocument()
        expect(buttonLinks).toHaveLength(2)
    })
})
