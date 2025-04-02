'use client'

import Hero from "../components/hero"

//import { useLayoutEffect } from "react"

export default function Page() {

  //const t = useTranslations('Hero')

  // useLayoutEffect(() => {
  //   if (!document.querySelector('#recaptcha-script')) {
  //     const script = document.createElement('script')
  //     script.id = 'recaptcha-script'
  //     script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GRECAPTCHA}`
  //     script.async = true
  //     document.body.appendChild(script)
  //   }
  // }, [])

  return (
    <>
      <Hero />
    </>
  )
}
