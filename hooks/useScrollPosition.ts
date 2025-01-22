import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { AppState } from '@/data/states'

const useScrollPosition = () => {
    const { SetAppState } = AppState(
        useShallow(state => {
            return {
                SetAppState: state.SetAppState
            }
        })
    )

    const HandleScroll = () => {
        const scrollX = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop

        // SetAppState({
        //     ScrollPosition: scrollY,
        //     FixedHeader: scrollY > 0
        // })
    }

    useEffect(() => {
        window.addEventListener('scroll', HandleScroll)
        window.addEventListener('wheel', HandleScroll)

        return () => {
            window.removeEventListener('scroll', HandleScroll)
            window.removeEventListener('wheel', HandleScroll)
        }
    }, [])
}

export default useScrollPosition