import '@/ui/styles/tailwind.css'
import '@/ui/styles/bizneset.css'

import { FC, Fragment, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { useAuth } from '@/hooks'
import { SEO, Analytics } from '@/ui/tools'

const App: FC<AppProps> = (props): ReactNode => {
    useAuth()

    const { Component, pageProps } = props

    return (
        <Fragment>
            <SEO />
            <Component {...pageProps} />
            <Analytics />
        </Fragment>
    )
}

export default App