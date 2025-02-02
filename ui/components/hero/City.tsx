import type { FC, ReactNode } from 'react'
import type { CityInterface, ListType } from '@/ts'

import { useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useOpen } from '@/hooks'
import { Translation } from '@/helpers/generals'
import { BusinessesState, CitiesState, CountriesState } from '@/data/states'
import { AccordionBottomIcon, CheckIcon } from '@/ui/icons'
import { ACTIVE_INPUT_ELEMENTS, DISABLED_STYLES, KEYSTROKES } from '@/data/constants'

const City: FC = (): ReactNode => {
    const { 
        open, 
        setOpen, 
        ref 
    } = useOpen()

    const { TempFilters, SetBusinessesState } = BusinessesState(
        useShallow(state => {
            return {
                TempFilters: state.TempFilters,
                SetBusinessesState: state.SetBusinessesState
            }
        })
    )

    const { Cities, Loading: LoadingCities } = CitiesState(
        useShallow(state => {
            return {
                Cities: state.Cities,
                Loading: state.Loading
            }
        })
    )

    const { Countries, Loading: LoadingCountries } = CountriesState(
        useShallow(state => {
            return {
                Countries: state.Countries,
                Loading: state.Loading
            }
        })
    )

    const disabled = useMemo(() => LoadingCities || Cities?.length === 0 || Countries?.length === 0 || LoadingCountries, [
        LoadingCities, 
        Cities, 
        Countries, 
        LoadingCountries
    ])

    const list = useMemo(() => {
        const list: Array<ListType> = []

        list.push({ 
            _id: null, 
            Name: Translation('select-city') 
        })

        Cities?.map((item: CityInterface) => {
            if (item.Country?.toString() === TempFilters?.Country?.toString()) list.push({
                _id: item._id,
                Name: item?.Name
            })
        })

        return list
    }, [Cities, TempFilters?.Country])

    const HandleChange = (cityId: string) => {
        SetBusinessesState({
            TempFilters: {
                ...TempFilters,
                City: cityId
            }
        })
    }

    return (
        <div className='p-1 w-full z-10'>
            <label htmlFor='city' className='text-[15px] text-black font-normal mt-1 ml-1'>
                {Translation('city')}
            </label>

            <div 
                // @ts-ignore
                ref={ref} 
                style={TempFilters?.Country ? {} : DISABLED_STYLES}
                className='select-none flex flex-col justify-start items-start sm:col-span-2 w-full'
                onKeyDown={(event) => {
                    const activeElementTag = document.activeElement?.tagName
                    const isInput = activeElementTag ? ACTIVE_INPUT_ELEMENTS.includes(activeElementTag) : false

                    if (event?.key === KEYSTROKES.ESCAPE && !isInput) setOpen(false)
                }}
            >
                <div className='relative w-full'>
                    <button 
                        id='city' 
                        className='mt-1.5 ml-1 whitespace-nowrap flex items-center justify-between bg-transparent text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-500' 
                        onClick={() => setOpen(!open)}
                        disabled={disabled}
                    >
                        { 
                            TempFilters?.City?.trim() !== '' &&
                            <span className='text-[15px]'>
                                {list?.find((item: ListType) => item['_id'] === TempFilters?.City)?.['Name']}
                            </span>
                        }

                        <AccordionBottomIcon strokeWidth={1} className='w-[16px] ml-2 h-[16px] text-gray-400' />
                    </button>

                    {
                        !disabled && 
                        open &&
                        <div className='absolute border w-[170px] h-auto max-h-[224px] overflow-scroll scrollbar-hidden top-9 left-0 rounded-lg border-gray-100 z-50 text-base bg-gray-50 divide-y divide-gray-100'>
                            {
                                list?.map((item: ListType, index: number) => {
                                    const isFirst = list?.indexOf(item) === 0
                                    const isLast = list?.indexOf(item) === list.length - 1

                                    if (index !== 0) return (
                                        <div 
                                            key={item['_id']} 
                                            className={`text-[#8F92A3] whitespace-nowrap justify-between font-normal cursor-pointer flex items-center px-3 py-2.5 w-full text-[14.5px] hover:bg-gray-100 transition-all ease-in-out duration-500 ${isLast && isFirst ? 'rounded-md' : isLast && !isFirst ? 'rounded-b-md' : !isLast && isFirst ? 'rounded-t-md' : 'rounded-none'}`}
                                            onClick={() => {
                                                const cityId = item['_id']

                                                if (cityId) {
                                                    HandleChange(cityId)
                                                    setOpen(false)
                                                }
                                            }}
                                        >
                                            <span className='flex items-center gap-2'>
                                                {item['Name']}
                                            </span>

                                            <span>
                                                {item['_id'] === TempFilters?.City && <CheckIcon strokeWidth={2} className='w-[18px] h-[18px] text-gray-400' />}
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

export default City