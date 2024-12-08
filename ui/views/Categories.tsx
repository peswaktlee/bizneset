import type { FC, ReactNode } from 'react'
import type { CategoryInterface } from '@/ts'

import { Fragment } from 'react'
import { Category } from '@/ui/components/categories'

const ListOfCategories: Array<CategoryInterface> = [
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Teknologji',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Ushqim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqane',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Shëndet',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Argëtim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Edukim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Financë',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Patundshmëri',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Turizëm',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Automobilistikë',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'OJQ',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Të Tjera',
        Businesses: 5
    }
]

const Categories: FC = (): ReactNode => {
    return (
        <div className='flow-root relative py-3'>
            <div 
                style={{ background: 'linear-gradient(270deg, #ffffff90 0%, #ffffff00 100%)' }}
                className='w-80 h-full absolute top-0 right-0 z-10 pointer-events-none' 
            />

            <div className='box-content relative overflow-x-auto overflow-y-hidden'>
                <div className='flex space-x-12'>
                    {
                        ListOfCategories.map((category: CategoryInterface, index) => (
                            <Fragment key={index}>
                                <Category {...category} />
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories