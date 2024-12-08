import Script from 'next/script'

import { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { ENV_MODE, ENV_MODES, GOOGLE_ANALYTICS_ID } from '@/data/constants'

const Analytics: FC = (): ReactNode => {
    if (ENV_MODE === ENV_MODES.PRODUCTION && GOOGLE_ANALYTICS_ID?.length > 6) return (
        <Fragment>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />

            <Script id='google-analytics'>
                {
                    `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', ${GOOGLE_ANALYTICS_ID});
                    `
                }
            </Script>
        </Fragment>
    )
}

export default Analytics