import { useEffect, useState } from 'react'

const useImage = (image?: string | null | undefined) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [isEmpty, setIsEmpty] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        setIsEmpty(false)
        setError(false)

        if (image === null) {
            setIsEmpty(true)
            setLoading(false)
        }
    }, [image])

    return {
        isEmpty,
        loading,
        error,
        setLoading,
        setError,
        setIsEmpty
    }
}

export default useImage