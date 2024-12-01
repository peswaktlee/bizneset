import '@/ui/styles/tailwind.css'
import '@/ui/styles/bizneset.css'

import { FC, Fragment, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { SEO } from '@/ui/seo'

const App: FC<AppProps> = (props): ReactNode => {
    const { Component, pageProps } = props

    return (
        <Fragment>
            <SEO />
            <Component {...pageProps} />
        </Fragment>
    )
}

export default App