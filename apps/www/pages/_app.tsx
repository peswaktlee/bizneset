import '../ui/styles/tailwind.css'
import '../ui/styles/modulify.css'
import '../ui/styles/reactflow.css'

import { FC, ReactNode } from 'react'
import { AppProps } from 'next/app'
// import { Impersonationing, Scripts } from '@/ui/components/generals'

// import { 
//     useAuth, 
//     useKeystrokes, 
//     usePlans, 
//     usePreventZoomPitch 
// } from '@/hooks'

const App: FC<AppProps> = (props): ReactNode => {
    // useAuth()
    // usePlans()
    // usePreventZoomPitch()
    // useKeystrokes()

    const { Component, pageProps } = props

    return (
        <main>
            <Component {...pageProps} />
            {/* <Impersonationing />
            <Scripts /> */}
        </main>
    )
}

export default App