import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useRouter } from 'next/router'
import { BusinessState } from '@/data/states'
import { ViewBusiness } from '@/actions/businesses'

const useBusiness = () => {
    const { pathname, query, isReady } = useRouter()

    const { SetBusinessState } = BusinessState(
        useShallow(state => {
            return {
                SetBusinessState: state.SetBusinessState
            }
        })
    )

    const LoadingReference = useRef(false)

    useEffect(() => {
        const allow = !LoadingReference.current

        if (allow && isReady) {
            SetBusinessState({ 
                Business: null,
                Loading: true
            })

            ViewBusiness(
                query?.category as string,
                query?.slug as string,
                LoadingReference
            )
        }

        return () => {
            SetBusinessState({ 
                Business: null, 
                Loading: true,
                Error: false,
                NotFound: false
            })
        }

        // @ts-ignore
    }, [pathname, query, isReady])
}

export default useBusiness