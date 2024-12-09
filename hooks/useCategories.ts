import { useEffect, useRef } from 'react'
import { ListCategories } from '@/actions/categories'
import { useShallow } from 'zustand/react/shallow'
import { CategoriesState } from '@/data/states'

const useCategories = () => {
    const LoadingReference = useRef(false)

    const { Categories } = CategoriesState(
        useShallow(
            state => {
                return {
                    Categories: state.Categories
                }
            }
        )
    )

    useEffect(() => {
        const allow = !LoadingReference.current && Categories.length === 0
        if (allow) ListCategories(LoadingReference)
    }, [])
}

export default useCategories