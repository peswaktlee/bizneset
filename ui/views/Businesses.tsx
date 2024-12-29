import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Fragment } from 'react'
import { Business } from '@/ui/components/businesses'

const ListOfBusinesses: Array<BusinessInterface> = [
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Teknologji',
        Slug: 'teknologji',
        Image: 'https://images.pexels.com/photos/13973499/pexels-photo-13973499.jpeg',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Ushqim',
        Slug: 'ushqim',
        Image: 'https://images.pexels.com/photos/13359138/pexels-photo-13359138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Dyqane',
        Slug: 'dyqane',
        Image: 'https://images.pexels.com/photos/11010065/pexels-photo-11010065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Shëndet',
        Slug: 'shëndet',
        Image: 'https://images.pexels.com/photos/2199190/pexels-photo-2199190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Argëtim',
        Slug: 'argëtim',
        Image: 'https://images.pexels.com/photos/5328302/pexels-photo-5328302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Edukim',
        Slug: 'edukim',
        Image: 'https://images.pexels.com/photos/1662562/pexels-photo-1662562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Name: 'Financë',
        Slug: 'financë',
        Image: 'https://images.pexels.com/photos/19139351/pexels-photo-19139351/free-photo-of-facade-of-a-bakery-in-a-traditional-townhouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'patundshmeri',
        Name: 'Patundshmëri',
        Image: 'https://images.pexels.com/photos/6044236/pexels-photo-6044236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'turizem',
        Name: 'Turizëm',
        Image: 'https://images.pexels.com/photos/7345374/pexels-photo-7345374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'automobilistike',
        Name: 'Automobilistikë',
        Image: 'https://images.pexels.com/photos/3735183/pexels-photo-3735183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'ojq',
        Name: 'OJQ',
        Image: 'https://images.pexels.com/photos/3735172/pexels-photo-3735172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    },
    {
        _id: Math.random().toString(36).substr(2, 9),
        Slug: 'te-tjera',
        Name: 'Të Tjera',
        Image: 'https://images.pexels.com/photos/3965554/pexels-photo-3965554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Gallery: [],
        Businesses: 5
    }
]

const Businesses: FC = (): ReactNode => {
    return (
        <div className='relative py-3 mt-4'>
            <div className='grid grid-cols-4 gap-x-8 gap-y-8'>
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