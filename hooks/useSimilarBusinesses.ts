import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useRouter } from 'next/router'
import { SimilarBusinessesState } from '@/data/states'
import { ListSimilarBusinesses } from '@/actions/businesses'

const useSimilarBusinesses = () => {
    const { pathname, query, isReady } = useRouter()

    const { SetSimilarBusinessesState } = SimilarBusinessesState(
        useShallow(state => {
            return {
                SetSimilarBusinessesState: state.SetSimilarBusinessesState
            }
        })
    )

    const LoadingReference = useRef(false)

    useEffect(() => {
        const allow = !LoadingReference.current

        if (allow && isReady) {
            SetSimilarBusinessesState({ 
                Businesses: [],
                Loading: true
            })

            ListSimilarBusinesses(LoadingReference)
        }

        return () => {
            SetSimilarBusinessesState({ 
                Businesses: [], 
                Loading: true,
                Error: false
            })
        }

        // @ts-ignore
    }, [pathname, query, isReady])
}

export default useSimilarBusinesses