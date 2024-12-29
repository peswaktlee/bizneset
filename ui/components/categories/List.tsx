import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesState, CategoriesState } from '@/data/states'
import { Category } from '@/ui/components/categories'
import { DEFAULT_CATEGORY } from '@/data/constants'

const List: FC = (): ReactNode => {
    const { Filters } = BusinessesState(
        useShallow(
            state => {
                return {
                    Filters: state.Filters
                }
            }
        )
    )

    const { 
        Categories, 
        Loading, 
        Error 
    } = CategoriesState(
        useShallow(
            state => {
                return {
                    Categories: state.Categories,
                    Loading: state.Loading,
                    Error: state.Error
                }
            }
        )
    )


    if (!Error && !Loading && Categories?.length !== 0) return (
        <div className='box-content relative overflow-x-auto overflow-y-hidden scrollbar-hidden'>
            <div className='flex space-x-12'>
                <Category {...DEFAULT_CATEGORY} isActive={Filters?.Category === null} />

                {
                    Categories.map((category: CategoryInterface, index) => {
                        const isActive = Filters?.Category === category?.Slug

                        return (
                            <Fragment key={index}>
                                <Category {...category} isActive={isActive} />
                            </Fragment>
                        )
                    })
                }

                <div className='absolute top-50 right-0 bg-white shadow-md border border-gray-50 text-xl flex items-center justify-center text-center text-gray-700 w-7 h-7 rounded-full'>
                    &gt;
                </div>
            </div>
        </div>
    )
}

export default List