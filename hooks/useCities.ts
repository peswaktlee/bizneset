import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { ListCities } from '@/actions/cities'
import { CitiesState } from '@/data/states'

const useCities = () => {
    const LoadingReference = useRef<boolean>(false)

    const { SetCitiesState } = CitiesState(
        useShallow(
            state => {
                return {
                    SetCitiesState: state.SetCitiesState
                }
            }
        )
    )

    useEffect(() => {
        if (LoadingReference.current) return
        else ListCities(LoadingReference)

        return () => {
            SetCitiesState({
                Loading: true,
                Error: false,
                Cities: []
            })

            LoadingReference.current = false
        }
    }, [])
}

export default useCities