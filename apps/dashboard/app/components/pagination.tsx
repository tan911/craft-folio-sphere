'use client'

import { Button } from '@repo/ui/buttons'

export default function Pagination() {
    const handlePreve = () => {
        console.log('sdfsf')
    }
    return (
        <div className="flex flex-row items-center justify-between border-t border-primary-200 p-4">
            <div className="flex gap-2 md:gap-4">
                <Button
                    mode="base"
                    size="base"
                    isIcon={false}
                    type="button"
                    onEvent={handlePreve}
                    classes="md:px-2.5 md:py-1.5"
                >
                    Previous
                </Button>
                <Button
                    mode="base"
                    size="base"
                    isIcon={false}
                    type="button"
                    onEvent={handlePreve}
                    classes="md:px-2.5 md:py-1.5"
                >
                    Next
                </Button>
            </div>
            <div className="md:mr-14">Pagination</div>
        </div>
    )
}
