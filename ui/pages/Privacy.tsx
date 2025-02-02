import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Footer, Header } from '@/ui/views'

const Privacy: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <Header />

            <div className='max-w-6xl mx-auto mt-24 h-full'>
                <h1 className='text-4xl mb-4 font-extrabold tracking-tight text-gray-900'>
                    Politika e Privatësisë
                </h1>

                <div className='mt-4 w-full text-m text-gray-700 mb-20'>
                    <p className='mt-4 w-full text-m text-gray-600 mb-4'>
                        Me përdorimin e platformës automatikisht pajtoheni me këtë mënyrë trajtimi të privatësisë:
                    </p>

                    <ul className='list-disc ml-8 w-[60%] lg:w-[60%] 2xl:w-[60%] xl:w-[60%] md:w-[80%] sm:w-[100%]'>
                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Ne përdorim Adresen tuaj të Internetit për të servuar produkte në zonën tuaj më të afërt, dhe për informata në krijim të llogarisë për lehtësim të procesit të regjistrimit. (IP nuk ruhet në databazën tonë dhe është anonime plotësishtë.)
                        </li>

                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Ne përdorim llogarinë tuaj në Google për identifikm to llogarisë ekzistuese apo për regjistrimin e një llogarie të re në platform. (Asnjë informatë sensitive nuk ben pjesë këtu, dhe ato të nevojshmet si Emri, Mbiemri edhe të ngjajshme ruhet në databazën tonë.)
                        </li>

                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Ne nuk i shpërndajmë të dhënat tuaja me asnjë shërbim tjetër përveq asaj tonës, ne respektojm të dhënat e tuaja dhe ato janë të sigurta me ne duke marrë masat e duhura për ti ruajtur ato në mënyrën më të sigurt. Nese keni pyetje tjera për privatësinë tuaj, ju mundeni të na kontaktoni në: selam@peswaktlee.com
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </NormalLayout>

    )
}

export default Privacy