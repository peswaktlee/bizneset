import type { FC, ReactNode } from 'react'
import type { CountryInterface } from '@/ts'

import { useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useOpen } from '@/hooks'
import { Translation } from '@/helpers/generals'
import { BusinessesState, CountriesState } from '@/data/states'
import { ACTIVE_INPUT_ELEMENTS, KEYSTROKES } from '@/data/constants'

const Country: FC = (): ReactNode => {
    const { 
        open, 
        setOpen, 
        ref 
    } = useOpen()

    const { Filters } = BusinessesState(
        useShallow(state => {
            return {
                Filters: state.Filters
            }
        })
    )

    const { Countries, Loading } = CountriesState(
        useShallow(state => {
            return {
                Countries: state.Countries,
                Loading: state.Loading
            }
        })
    )

    const disabled = useMemo(() => Loading || Countries?.length === 0, [Loading, Countries])

    const list = useMemo(() => {
        const list = []

        list.push({ 
            _id: null, 
            Name: Translation('select-country') 
        })

        Countries?.map((item: CountryInterface) => {
            list.push({
                _id: item._id,
                Name: item?.Name
            })
        })

        return list
    }, [Countries])

    const HandleChange = (countryId: string) => {
        BusinessesState.setState({
            Filters: {
                ...Filters,
                Country: countryId
            }
        })
    }

    return (
        <div className='p-1'>
            <p className='text-[15px] text-black font-normal mt-1 ml-1'>
                {Translation('country')}
            </p>

            <div 
                // ref={ref} 
                className='select-none flex flex-col justify-start items-start sm:col-span-2 w-full' style={disabled ? { opacity: '0.75', pointerEvents: 'none' } : { opacity: '1', pointerEvents: 'auto' }}
                onKeyDown={(event) => {
                    const activeElementTag = document.activeElement?.tagName
                    const isInput = activeElementTag ? ACTIVE_INPUT_ELEMENTS.includes(activeElementTag) : false

                    if (event?.key === KEYSTROKES.ESCAPE && !isInput) setOpen(false)
                }}
            >
                <div className='relative w-full'>
                    <button className='mt-1 ml-1 bg-transparent' onClick={() => setOpen(!open)}>
                        { 
                            Filters?.Country?.trim() !== '' &&
                            <span className='text-[15px] text-gray-400'>
                                {list?.find((item: any) => item['_id'] === Filters?.Country)?.['Name']}
                            </span>
                        }

                        {/* <ChevronDownIcon strokeWidth={1} className='w-[16px] h-[16px] text-gray-400' /> */}
                    </button>

                    {
                        !disabled && 
                        open &&
                        <div className='absolute border h-auto max-h-[224px] overflow-scroll scrollbar-hidden w-full top-10 right-0 rounded-lg border-gray-100 z-50 text-base bg-gray-50 divide-y divide-gray-100'>
                            {
                                list?.map((item: any) => {
                                    const isFirst = list?.indexOf(item) === 0
                                    const isLast = list?.indexOf(item) === list.length - 1

                                    return (
                                        <div 
                                            key={item['_id']} 
                                            className={`text-[#8F92A3] justify-between font-normal cursor-pointer flex items-center py-[5px] px-2 min-w-[165px] text-[12px] hover:bg-gray-100 transition-all ease-in-out duration-500 ${isLast && isFirst ? 'rounded-md' : isLast && !isFirst ? 'rounded-b-md' : !isLast && isFirst ? 'rounded-t-md' : 'rounded-none'}`}
                                            onClick={() => {
                                                HandleChange(item['_id'])
                                                setOpen(false)
                                            }}
                                        >
                                            <span className='flex items-center gap-2'>
                                                {item['Name']}
                                            </span>

                                            <span>
                                                {/* {item['_id'] === Filters?.Country && <CheckIcon strokeWidth={2} className='w-4 h-4 text-gray-400' />} */}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Country