import Script from 'next/script'

import { FC, ReactNode } from 'react'

import { Fragment } from 'react'

import { 
    ELEMENTS_IDS, 
    ENV_MODE, 
    ENV_MODES, 
    GOOGLE_ANALYTICS_ID, 
    HOTJAR_ID 
} from '@/data/constants'

const Scripts: FC = (): ReactNode => {
    if (ENV_MODE === ENV_MODES.PRODUCTION && GOOGLE_ANALYTICS_ID?.length > 6) return (
        <Fragment>

            { 
                GOOGLE_ANALYTICS_ID?.length > 5 &&
                <Fragment>
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />

                    <Script id={ELEMENTS_IDS.GOOGLE_ANALYTICS} type='text/javascript'>
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
            }

            {
                HOTJAR_ID?.length > 5 &&
                <Script id={ELEMENTS_IDS.HOTJAR} type='text/javascript'>
                    {
                        `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                        `
                    }
                </Script>
            }
        </Fragment>
    )
}

export default Scripts