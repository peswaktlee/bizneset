import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Fragment } from 'react'
import { Business } from '@/ui/components/businesses'

const ListOfBusinesses: Array<BusinessInterface> = [
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Teknologji',
        Slug: 'teknologji',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Ushqim',
        Slug: 'ushqim',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqane',
        Slug: 'dyqane',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Shëndet',
        Slug: 'shëndet',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Argëtim',
        Slug: 'argëtim',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Edukim',
        Slug: 'edukim',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Financë',
        Slug: 'financë',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'patundshmeri',
        Name: 'Patundshmëri',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'turizem',
        Name: 'Turizëm',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'automobilistike',
        Name: 'Automobilistikë',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'ojq',
        Name: 'OJQ',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'te-tjera',
        Name: 'Të Tjera',
        Image: 'https://via.placeholder.com/150',
        Gallery: [],
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