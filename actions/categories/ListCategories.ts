import type { CategoryInterface, LoadingReference } from '@/ts'

import { Request } from '@/helpers/http'
import { CategoriesState } from '@/data/states'
import { Console } from '@/helpers/debug'
import { ENDPOINTS, METHODS } from '@/data/constants'

const ListCategories = async (LoadingReference: LoadingReference) => {
    const { SetCategoriesState } = CategoriesState.getState()

    if (!LoadingReference.current) {
        try {
            LoadingReference.current = true
    
            const { success, data } = await Request({ 
                method: METHODS.POST,
                path: ENDPOINTS.CATEGORIES.LIST_CATEGORIES
            })

            const formattedData = data as Array<CategoryInterface>
    
            if (success && formattedData.length > 0) SetCategoriesState({
                Categories: formattedData,
                Loading: false,
                Error: false
            })
    
            else SetCategoriesState({
                Categories: [],
                Loading: false,
                Error: true
            })
        }
    
        catch (error) {
            Console.Error('ListCategories', error)
    
            SetCategoriesState({
                Categories: [],
                Loading: false,
                Error: true
            })
        }
    
        finally {
            LoadingReference.current = false
        }
    }
}

export default ListCategories