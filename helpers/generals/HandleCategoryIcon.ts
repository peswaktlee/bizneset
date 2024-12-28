import type { FC } from 'react'
import { CATEGORIES_PATHS } from '@/data/constants'

import { 
    FoodIcon, 
    TechIcon,
    StoreIcon,
    HealthIcon,
    EducationIcon,
    FinanceIcon,
    TourismIcon,
    AutoIcon,
    NonProfitIcon,
    OtherIcon,
    FunIcon,
    AllIcon,
    BuildingsIcon
} from '@/ui/icons'

const HandleCategoryIcon = (slug: string): FC => {
    if (slug === CATEGORIES_PATHS.ALL) return AllIcon
    if (slug === CATEGORIES_PATHS.TECH) return TechIcon
    if (slug === CATEGORIES_PATHS.FOOD) return FoodIcon
    if (slug === CATEGORIES_PATHS.STORE) return StoreIcon
    if (slug === CATEGORIES_PATHS.HEALTH) return HealthIcon
    if (slug === CATEGORIES_PATHS.FUN) return FunIcon
    if (slug === CATEGORIES_PATHS.EDUCATION) return EducationIcon
    if (slug === CATEGORIES_PATHS.BUSINESS) return BuildingsIcon
    if (slug === CATEGORIES_PATHS.FINANCE) return FinanceIcon
    if (slug === CATEGORIES_PATHS.TOURISM) return TourismIcon
    if (slug === CATEGORIES_PATHS.AUTO) return AutoIcon
    if (slug === CATEGORIES_PATHS.OJQ) return NonProfitIcon
    else return OtherIcon
}

export default HandleCategoryIcon