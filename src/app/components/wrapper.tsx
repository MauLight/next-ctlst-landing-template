import { type ReactNode } from 'react'

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <main id="wrapper" className="relative w-screen flex justify-center bg-gradient-to-b from-[#4316db] to-[#9076e7]">
            {children}
        </main>
    )
}
