import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { BusinessesState, CategoriesState } from '@/data/states'
import { Category } from '@/ui/components/categories'

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
        <div className='box-content relative overflow-x-auto overflow-y-hidden'>
            <div className='flex space-x-12'>
                {
                    Categories.map((category: CategoryInterface, index) => {
                        const isActive = Filters?.Category === category._id

                        return (
                            <Fragment key={index}>
                                <Category {...category} isActive={isActive} />
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List