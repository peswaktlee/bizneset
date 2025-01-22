import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const usePath = () => {
    const pathnmae = usePathname()

    const [path, setPath] = useState<string>('')

    useEffect(() => {
        setPath(pathnmae)
    }, [pathnmae])

    return path
}

export default usePath