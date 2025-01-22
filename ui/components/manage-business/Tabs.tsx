import type { FC, ReactNode } from 'react'
import type { ManageBusinessTabTypes } from '@/ts'

import { Translation } from '@/helpers/generals'
import { Button } from '@/ui/views'
import { ManageBusinessTabList } from '@/data/lists'
import { BusinessesFormState } from '@/data/states'
import { useShallow } from 'zustand/react/shallow'

const Tabs: FC = (): ReactNode => {
    const { Tab, SetBusinessFormState } = BusinessesFormState(
        useShallow(state => {
            return {
                Tab: state.Tab,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )


    const HandleChange = (slug: ManageBusinessTabTypes) => {
        if (Tab !== slug) SetBusinessFormState({ Tab: slug })
    }

    return (
        <div className='max-w-6xl mx-auto h-auto w-full flex justify-start mb-1'>
            <div className='flex items-center bg-white rounded-md p-1 gap-1 shadow-sm'>
                {ManageBusinessTabList?.map((tab, index) => {
                    const { 
                        disabled, 
                        slug,
                        icon, 
                        title
                    } = tab
                    
                    const Icon = icon
                    const active = Tab === slug

                    return (
                        <Button
                            key={index}
                            type='secondary'
                            className={`text-[13.5px] gap-1.5 px-2 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed ' : ''} ${active ? 'bg-gray-200 bg-opacity-60 cursor-default' : 'bg-gray-50 cursor-pointer'}`}
                            onClick={() => !active && HandleChange(slug)}
                            disabled={disabled}
                        >
                            <Icon className='w-[18px] h-[18px]' />
                            {Translation(title)}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs