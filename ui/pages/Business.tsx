import type { FC, ReactNode } from 'react'

import { useMemo } from 'react'
import { useBusiness, useSimilarBusinesses } from '@/hooks'
import { useShallow } from 'zustand/react/shallow'
import { NormalLayout } from '@/ui/layouts'
import { SEO } from '@/ui/tools'
import { BusinessState } from '@/data/states'
import { Gallery, GeneralInfo, Locations, SimilarBusinesses } from '@/ui/components/business-page'
import { NotFound as NotFoundPage } from '@/ui/pages'

const Business: FC = (): ReactNode => {
    useBusiness()
    useSimilarBusinesses()

    const { 
        Business, 
        Loading, 
        Error, 
        NotFound 
    } = BusinessState(
        useShallow(state => {
            return {
                Business: state.Business,
                Loading: state.Loading,
                Error: state.Error,
                NotFound: state.NotFound
            }
        })
    )

    const isCompleted = useMemo(() => {
        return !Loading && !Error && Business
    }, [Loading, Error, Business])

    if (!NotFound) return (
        <NormalLayout>
            <SEO title={isCompleted ? Business?.Name : undefined} />

            <GeneralInfo />
            <Gallery />
            <Locations />
            <SimilarBusinesses />
        </NormalLayout>
    )

    else return <NotFoundPage />
}

export default Business