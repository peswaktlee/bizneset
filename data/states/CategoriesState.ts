import type { CategoriesStateInterface } from '@/ts'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { 
    DEFAULT_CATEGORIES_STATE, 
    ENV_MODE,
    ENV_MODES, 
    STATES 
} from '@/data/constants'

const CategoriesState = create(
    devtools<CategoriesStateInterface>(
        (set) => {
            const CategoriesInitialState: CategoriesStateInterface = {
                Categories: DEFAULT_CATEGORIES_STATE.Categories,
                Loading: DEFAULT_CATEGORIES_STATE.Loading,
                Error: DEFAULT_CATEGORIES_STATE.Error,
                SetCategoriesState: (payload: Partial<CategoriesStateInterface>) => set((state: CategoriesStateInterface) => ({ 
                    ...state, 
                    ...payload 
                }))
            }

            return CategoriesInitialState
        },
        {
            name: STATES.BUSINESSES,
            store: STATES.BUSINESSES,
            enabled: ENV_MODES.DEV === ENV_MODE
        }
    )
)

export default CategoriesState