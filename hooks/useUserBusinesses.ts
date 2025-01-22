import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useInfiniteScroll } from '@/hooks'
import { AuthState, UserBusinessesState } from '@/data/states'
import { ListUserBusinesses } from '@/actions/businesses'

const useUserBusinesses = () => {
    const { User } = AuthState(
        useShallow(state => {
            return {
                User: state.User
            }
        })
    )

    const { 
        UserBusinesses, 
        SetUserBusinessesState, 
        Loading, 
        HasMore 
    } = UserBusinessesState(
        useShallow(state => {
            return {
                UserBusinesses: state.UserBusinesses,
                SetUserBusinessesState: state.SetUserBusinessesState,
                Loading: state.Loading,
                HasMore: state.HasMore
            }
        })
    )

    const AbortControllerReference = useRef<AbortController | null>(null)

    const LoadMore = () => {
        const allow = User && Object.keys(User).length > 0

        if (allow) {
            if (AbortControllerReference.current) {
                AbortControllerReference.current.abort()
                AbortControllerReference.current = null
            }

            ListUserBusinesses(AbortControllerReference)
        }
    }

    const [InfiniteEndReference] = useInfiniteScroll({
        loading: Loading,
        hasNextPage: HasMore,
        onLoadMore: LoadMore,
        rootMargin: '0px 0px 800px 0px'
    })

    useEffect(() => {
        SetUserBusinessesState({ 
            UserBusinesses: [],
            Loading: true,
            Error: false,
            HasMore: true
        })
        
        // @ts-ignore
    }, [User?._id])

    useEffect(() => {
        SetUserBusinessesState({ 
            UserBusinesses: [],
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
        if (UserBusinesses.length === 0 && HasMore) LoadMore()
    }, [UserBusinesses, HasMore])

    return { 
        InfiniteEndReference 
    }
}

export default useUserBusinesses