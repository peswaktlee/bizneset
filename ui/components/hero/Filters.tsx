import type { FC, ReactNode } from 'react'

import { 
    Absolutos, 
    City, 
    Country, 
    Term, 
    SearchButton 
} from '@/ui/components/hero'

const Breakline: FC = (): ReactNode => <div className='mx-4 bg-gray-100 w-[2px] h-10 rounded-full' />

const Filters: FC = (): ReactNode => {
    return (
        <div className='flex bg-white pl-4 pr-2 py-1 rounded-full w-auto items-center shadow-xl'>
            <Term />
            <Breakline />
            <Country />
            <Breakline />
            <City />
            <SearchButton />
        </div>
    )
}

export default Filters