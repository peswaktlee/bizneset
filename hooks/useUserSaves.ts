import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useInfiniteScroll } from '@/hooks'
import { AuthState, UserSavesState } from '@/data/states'
import { ListSaves } from '@/actions/saves'

const useUserSaves = () => {
    const { User } = AuthState(
        useShallow(state => {
            return {
                User: state.User
            }
        })
    )

    const { 
        UserSaves, 
        SetUserSavesState, 
        Loading, 
        HasMore 
    } = UserSavesState(
        useShallow(state => {
            return {
                UserSaves: state.UserSaves,
                SetUserSavesState: state.SetUserSavesState,
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

            ListSaves(AbortControllerReference)
        }
    }

    const [InfiniteEndReference] = useInfiniteScroll({
        loading: Loading,
        hasNextPage: HasMore,
        onLoadMore: LoadMore,
        rootMargin: '0px 0px 800px 0px'
    })

    useEffect(() => {
        SetUserSavesState({ 
            UserSaves: [],
            Loading: true,
            Error: false,
            HasMore: true
        })
        
        // @ts-ignore
    }, [User?._id])

    useEffect(() => {
        SetUserSavesState({ 
            UserSaves: [],
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
        if (UserSaves.length === 0 && HasMore) LoadMore()
    }, [UserSaves, HasMore])

    return { 
        InfiniteEndReference 
    }
}

export default useUserSaves