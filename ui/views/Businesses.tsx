import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Fragment } from 'react'
import { Business } from '@/ui/components/businesses'

const ListOfBusinesses: Array<BusinessInterface> = [
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Teknologji',
        Slug: 'teknologji',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Ushqim',
        Slug: 'ushqim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqane',
        Slug: 'dyqane',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Shëndet',
        Slug: 'shëndet',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Argëtim',
        Slug: 'argëtim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Edukim',
        Slug: 'edukim',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Financë',
        Slug: 'financë',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'patundshmeri',
        Name: 'Patundshmëri',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'turizem',
        Name: 'Turizëm',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'automobilistike',
        Name: 'Automobilistikë',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'ojq',
        Name: 'OJQ',
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'te-tjera',
        Name: 'Të Tjera',
        Businesses: 5
    }
]

const Businesses: FC = (): ReactNode => {
    return (
        <div className='relative py-3'>
            <div className='grid grid-cols-4 gap-x-4 gap-y-14'>
                {
                    ListOfBusinesses.map((category: BusinessInterface, index) => (
                        <Fragment key={index}>
                            <Business {...category} />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Businesses