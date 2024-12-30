import type { FC, ReactNode } from 'react'

import { 
    Html, 
    Head, 
    Main, 
    NextScript 
} from 'next/document'

const Document: FC = (): ReactNode => {
    return (
        <Html lang='en' className='h-full'>
            <Head />
            
            <meta name='viewport' content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' />

            <body className='h-full'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document