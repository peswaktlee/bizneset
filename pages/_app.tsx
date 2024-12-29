import '@/ui/styles/tailwind.css'
import '@/ui/styles/bizneset.css'

import { FC, Fragment, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { useAuth, useScrollPosition } from '@/hooks'
import { SEO, Scripts } from '@/ui/tools'

const App: FC<AppProps> = (props): ReactNode => {
    useAuth()
    useScrollPosition()

    const { Component, pageProps } = props

    return (
        <Fragment>
            <SEO />
            <Component {...pageProps} />
            <Scripts />
        </Fragment>
    )
}

export default App