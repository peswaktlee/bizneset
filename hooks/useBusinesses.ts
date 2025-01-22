import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useInfiniteScroll } from '@/hooks'
import { AuthState, BusinessesState } from '@/data/states'
import { ListBusinesses } from '@/actions/businesses'

const useBusinesses = () => {
    const { User } = AuthState(
        useShallow(state => {
            return {
                User: state.User
            }
        })
    )

    const { 
        Businesses, 
        SetBusinessesState, 
        Loading, 
        HasMore 
    } = BusinessesState(
        useShallow(state => {
            return {
                Businesses: state.Businesses,
                SetBusinessesState: state.SetBusinessesState,
                Loading: state.Loading,
                HasMore: state.HasMore
            }
        })
    )

    const AbortControllerReference = useRef<AbortController | null>(null)

    const LoadMore = () => {
        const allow = User !== null

        if (allow) {
            if (AbortControllerReference.current) {
                AbortControllerReference.current.abort()
                AbortControllerReference.current = null
            }

            ListBusinesses(AbortControllerReference)
        }
    }

    const [InfiniteEndReference] = useInfiniteScroll({
        loading: Loading,
        hasNextPage: HasMore,
        onLoadMore: LoadMore,
        rootMargin: '0px 0px 800px 0px'
    })

    useEffect(() => {
        SetBusinessesState({ 
            Businesses: [],
            Loading: true,
            Error: false,
            HasMore: true
        })

        ListBusinesses(AbortControllerReference)

        // @ts-ignore
    }, [User?._id])

    useEffect(() => {
        SetBusinessesState({ 
            Businesses: [],
            Loading: true,
            Error: false,
            HasMore: true
        })

        return () => {
            if (AbortControllerReference.current) {
                AbortControllerReference.current.abort()
                AbortControllerReference.current = null
            }
        }
    }, [])

    useEffect(() => {
        if (Businesses.length === 0 && HasMore) LoadMore()
    }, [Businesses, HasMore])

    return { 
        InfiniteEndReference 
    }
}

export default useBusinesses