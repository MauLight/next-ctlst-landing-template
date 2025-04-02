'use client'

//import { useTranslations } from 'next-intl'
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

                <div className="col-span-1">

                    <div className="text-wrapper">
                        <h1 className="text-title color-text1">
                            Design
                            <br />
                            and code
                            <br />
                            React apps
                        </h1>
                        <p className="text-medium text-balance">
                            Don’t skip design. Learn design and code, by building real apps with
                            React and Swift. Complete courses about the best tools.
                        </p>
                    </div>

                </div>
                <div className="col-span-1 border border-red-500">

                </div>

            </ContentWrapper>

        </Wrapper>
    )
}