import { 
    Html, 
    Head, 
    Main, 
    NextScript 
} from 'next/document'

export default function Document() {
    return (
        <Html lang='en' className='h-full'>
            <Head />
            
            <meta name='viewport' content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' />

            <body className='h-full'>
                <Main />
                <NextScript />

                <script async src='https://cdn.tailwindcss.com'></script>
            </body>
        </Html>
    )
}