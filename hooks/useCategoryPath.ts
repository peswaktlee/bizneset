import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesState } from '@/data/states'
import { useRouter } from 'next/router'

const useCategoryPath = () => {
    const router = useRouter()

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

            const isDifferent = currentCategory !== category

            if (isDifferent) SetBusinessesState({
                Filters: {
                    ...Filters,
                    Category: category
                }
            })
        }
    }, [router?.query?.slug])
}

export default useCategoryPath