import type { FC, ReactNode } from 'react'

import { useShallow } from 'zustand/react/shallow'
import { BusinessesFormState } from '@/data/states'
import { Translation } from '@/helpers/generals'
import { NoLinks, LinkAdd, LinkList } from '@/ui/components/manage-business'
import { MANAGE_BUSINESS_TABS } from '@/data/constants'

const Links: FC = (): ReactNode => {
    const { Form, Tab } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                Tab: state.Tab
            }
        })
    )

    if (Tab === MANAGE_BUSINESS_TABS.LINKS && Form) return (
        <div className='gap-1.5 p-4 bg-white w-full flex flex-col shadow-sm rounded-xl text-sm justify-start flex-wrap'>
            {
                Form?.Locations?.length !== 0 &&
                <div className='text-lg'>
                    <h2 className='font-bold'>
                        {Translation('links')}
                    </h2>
                </div>
            }

            <NoLinks />
            <LinkList />
            <LinkAdd />
        </div>
    )
}

export default Links