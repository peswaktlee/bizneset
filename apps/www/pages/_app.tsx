import '@/ui/styles/tailwind.css'
import '@/ui/styles/bizneset.css'

import { FC, ReactNode } from 'react'
import { AppProps } from 'next/app'

const App: FC<AppProps> = (props): ReactNode => {
    const { Component, pageProps } = props
    return <Component {...pageProps} />
}

export default App