import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { ListCountries } from '@/actions/countries'
import { CountriesState } from '@/data/states'

const useCities = () => {
    const LoadingReference = useRef<boolean>(false)

    const { SetCountriesState } = CountriesState(
        useShallow(
            state => {
                return {
                    SetCountriesState: state.SetCountriesState
                }
            }
        )
    )

    useEffect(() => {
        if (LoadingReference.current) return
        else ListCountries(LoadingReference)

        return () => {
            SetCountriesState({
                Loading: true,
                Error: false,
                Countries: []
            })

            LoadingReference.current = false
        }
    }, [])
}

export default useCities