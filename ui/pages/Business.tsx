import { useMemo, type FC, type ReactNode } from 'react'

import { useBusinesses } from '@/hooks'
import { useShallow } from 'zustand/react/shallow'
import { NormalLayout } from '@/ui/layouts'
import { SEO } from '@/ui/tools'
import { BusinessState } from '@/data/states'
import { Gallery, GeneralInfo, Locations, SimilarBusinesses } from '@/ui/components/business-page'

const Business: FC = (): ReactNode => {
    useBusinesses()

    const { Business, Loading, Error } = BusinessState(
        useShallow(state => {
            return {
                Business: state.Business,
                Loading: state.Loading,
                Error: state.Error
            }
        })
    )

    const isCompleted = useMemo(() => {
        return !Loading && !Error && Business
    }, [Loading, Error, Business])

    return (
        <NormalLayout>
            <SEO title={isCompleted ? Business?.Name : undefined} />

            <GeneralInfo />
            <Gallery />
            <Locations />
            <SimilarBusinesses />
        </NormalLayout>
    )
}

export default Business