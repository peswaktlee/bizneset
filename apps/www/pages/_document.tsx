import { 
    Html, 
    Head, 
    Main, 
    NextScript 
} from 'next/document'

export default function Document() {
    return (
        <Html lang='en' className='h-full gradient-bg'>
            <Head />
            
            <meta name='viewport' content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' />

            <body className='h-full'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}