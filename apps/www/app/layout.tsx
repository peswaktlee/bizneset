import './globals.css'

import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'

import localFont from 'next/font/local'

const gilroy = localFont({
    variable: '--font-gilroy',
    src: [
        {
            path: './fonts/gilroy-black-italic.woff',
            weight: '900',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-black.woff',
            weight: '900',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-extra-bold-italic.woff',
            weight: '800',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-extra-bold.woff',
            weight: '800',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-bold-italic.woff',
            weight: '700',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-bold.woff',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-heavy-italic.woff',
            weight: '600',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-heavy.woff',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-medium-italic.woff',
            weight: '500',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-medium.woff',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-regular-italic.woff',
            weight: '400',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-regular.woff',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-light-italic.woff',
            weight: '300',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-light.woff',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-semi-bold-italic.woff',
            weight: '500',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-semi-bold.woff',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-thin-italic.woff',
            weight: '200',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-thin.woff',
            weight: '200',
            style: 'normal'
        },
        {
            path: './fonts/gilroy-ultra-light-italic.woff',
            weight: '100',
            style: 'italic'
        },
        {
            path: './fonts/gilroy-ultra-light.woff',
            weight: '100',
            style: 'normal'
        }
    ]
})

export const metadata: Metadata = {
    title: 'Bizneset nga Peswaktle',
    description: 'Një platformë për promovimin e bizneseve me pronarë muslimanë.'
}

export type LayoutComponentProps = Readonly<{
    children: React.ReactNode;
}>

const Layout: FC<LayoutComponentProps> = (props): ReactNode => {
    const { children } = props

    return (
        <html lang='sq-AL'>
            <body className={`${gilroy.variable}`}>
                {children}
            </body>
        </html>
    )
}

export default Layout