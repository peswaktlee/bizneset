import type { FC, ReactNode } from 'react'

import { NormalLayout } from '@/ui/layouts'
import { Footer, Header } from '@/ui/views'

const Terms: FC = (): ReactNode => {
    return (
        <NormalLayout>
            <Header />

            <div className='max-w-6xl mx-auto mt-24 h-full'>
                <h1 className='text-4xl mb-4 font-extrabold tracking-tight text-gray-900'>
                    Kushtet e Shërbimit
                </h1>

                <div className='mt-4 w-full text-m text-gray-700 mb-20'>
                    <p className='mt-4 w-full text-m text-gray-600 mb-4'>
                        Me përdorimin e platformës automatikisht pajtoheni me këto kushte:
                    </p>

                    <ul className='list-disc ml-8 w-[60%] lg:w-[60%] 2xl:w-[60%] xl:w-[60%] md:w-[80%] sm:w-[100%]'>
                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Për të marrur pjesë në marrje të një produkti ju duhet të keni nevoj për
                            të, dhe kushtimisht mos të shitet diku produkti i njejtë, në përjashtim
                            nëse dhurrohet diku tjetër për nevojë produkti njejt pa modifikim ose të
                            ngjajshme.
                        </li>

                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Llogaritë e krijuara në platformë nuk kan mundësi të fshihen sa i përket
                            versionit aktual, kurse fshirja e produktëve apo markimi i tyre të
                            shitura që të mos shfaqen në platformë është e mundur. (Ky kusht do të
                            ndryshojë në versionet e ardhshme.)
                        </li>

                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Reptësisht nuk lejohet postimi i produkteve drejtpërdrejt apo që kan
                            lidhje me: Drogë, Armë, Pornografi, Lojra të Fatit apo Produkte të
                            dëmshme dhe të ngjajshme si në listën më lartë. Ato janë të dënueshme me
                            fshirje të të gjithave produkteve në atë llogari.
                        </li>

                        <li className='mt-4 w-full text-sm text-gray-600'>
                            Këqpërdorimi si shpërndarja apo përdorimi i të dhënave të përdoruesve në
                            platformë është i ndaluar dhe i dënueshëm me institucionet përkatëse në
                            të gjitha suazat, duke përshfirë edhe abuzimin e platformës në të gjitha
                            kushtet.
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </NormalLayout>

    )
}

export default Terms