'use client'
import Image from "next/image"
//import { useTranslations } from 'next-intl'
import { Link } from "react-scroll"
import Wrapper from "./wrapper"
import ContentWrapper from "./content-wrapper"

// const text = {
//     title: 'Ctlst',
//     subtitle: 'If you can imagine it, you can make it real.',
//     third: 'Define your online presence with superb design and software that delivers real results.'
// }

export default function Hero() {

    //const text = useTranslations('Hero')

    return (
        <Wrapper>

            <ContentWrapper>

                <div className="col-span-1 border border-red-500">
                    <Image width={60} height={60} src="/images/logos/logo.svg" alt="logo" />
                    <h1>Design and code React apps</h1>
                    <p>
                        Don’t skip design. Learn design and code, by building real apps with
                        React and Swift. Complete courses about the best tools.
                    </p>
                    <Link to="/page-2/">Go to page 2</Link>
                </div>
                <div className="col-span-1 border border-red-500">

                </div>

            </ContentWrapper>

        </Wrapper>
    )
}