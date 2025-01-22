import type { FC, ReactNode } from 'react'
import type { PageHeaderProps } from '@/ts'
import { Translation } from '@/helpers/generals'

const PageHeader: FC<PageHeaderProps> = (props): ReactNode => {
    const { title, description } = props

    return (
        <header className='max-w-6xl mx-auto'>
            <nav className='py-8 mt-14 rounded-lg flex flex-col w-full justify-start items-start'>
                <h1 className='text-2xl font-bold text-gray-900'>
                    {Translation(title)}
                </h1>

                <p className='text-gray-500 mt-1 text-md'>
                    {Translation(description)}
                </p>
            </nav>
        </header>
    )
}

export default PageHeader