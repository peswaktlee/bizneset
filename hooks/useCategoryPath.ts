import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesState, CategoriesState } from '@/data/states'
import { useRouter } from 'next/router'

const useCategoryPath = () => {
    const router = useRouter()

    const { Categories } = CategoriesState(
        useShallow(
            state => {
                return {
                    Categories: state.Categories
                }
            }
        )
    )

    const { Filters, SetBusinessesState } = BusinessesState(
        useShallow(
            state => {
                return {
                    Filters: state.Filters,
                    SetBusinessesState: state.SetBusinessesState
                }
            }
        )
    )

    useEffect(() => {
        const categorySlug = router.query?.slug

        if (categorySlug) {
            const category = categorySlug as string
            const currentCategory = Filters?.Category

            const exits = Categories?.find(c => c?.Slug === category)

            if (exits) {
                const isDifferent = currentCategory !== category

                if (isDifferent) SetBusinessesState({
                    Filters: {
                        ...Filters,
                        Category: category
                    }
                })
            }

            else {
                SetBusinessesState({
                    Filters: {
                        ...Filters,
                        Category: null
                    }
                })

                window.history.pushState({}, '', '/')
            }
        }
    }, [router?.query?.slug, Categories])
}

export default useCategoryPath