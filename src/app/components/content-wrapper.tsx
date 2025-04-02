import { type ReactNode } from 'react'

export default function ContentWrapper({ children }: { children: ReactNode }) {
    return (
        <div id="content-wrapper" className="w-full max-w-[980px] grid grid-cols-auto md:grid-cols-[500px_auto] gap-[30px] md:gap-[40px] box-border px-[20px] my-[100px]">
            {children}
        </div>
    )
}
