import React, { useEffect } from 'react'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  // https://github.com/michalsnik/aos
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      animatedClassName: 'animated',
    })

  }, []);

  useEffect(() => {
    AOS.refresh();
  })
  
  return <Component {...pageProps} />
}
