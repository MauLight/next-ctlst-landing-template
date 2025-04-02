'use client'
import Image from "next/image"
//import { useTranslations } from 'next-intl'
import { Link } from "react-scroll"

// const text = {
//     title: 'Ctlst',
//     subtitle: 'If you can imagine it, you can make it real.',
//     third: 'Define your online presence with superb design and software that delivers real results.'
// }

export default function Hero() {

    //const text = useTranslations('Hero')

    return (
        <main className="h-screen flex flex-col relative overflow-hidden  max-md:px-5">
            <Image width={60} height={60} src="/images/logos/logo.svg" alt="logo" />
            <h1>Design and code React apps</h1>
            <p>
                Don’t skip design. Learn design and code, by building real apps with
                React and Swift. Complete courses about the best tools.
            </p>
            <Link to="/page-2/">Go to page 2</Link> <br />
        </main>
    )
}