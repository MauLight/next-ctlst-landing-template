import { type ReactNode } from 'react'

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <main id="wrapper" className="relative w-screen flex justify-center">
            {children}
        </main>
    )
}
