import Head from 'next/head'

import type { FC, ReactNode } from 'react'
import type { MetaTagsTypes } from '@/ts'

import { Translation } from '@/helpers/generals/Translation'
import { PUBLIC_PATHS } from '@/data/constants'

const site_name = Translation('app-name')
const site_description = Translation('app-description')

const SEO: FC<MetaTagsTypes> = (props): ReactNode => {
    // const { title, index = true } = props
    const { title } = props

    const site_title = title ? `${title} - ${site_name}` : site_name

    return (
        <Head>
            <title>
                {site_title}
            </title>

            <meta property='og:title' content={site_title} />
            <meta name='description' content={site_description} />
            <meta property='og:description' content={site_description} />
            <meta property='og:image' content={PUBLIC_PATHS.IMAGES.THUBNAIL} />
            <meta name='viewport' content='width=device-width, user-scalable=no' />

            <meta name='robots' content='noindex, nofollow' />

            {/* {index === false && <meta name='robots' content='noindex, nofollow' />} */}
        </Head>
    )
}

export default SEO