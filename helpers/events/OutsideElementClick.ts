import { useEffect, useRef } from 'react'

const OutsideElementClick = (handler: Function) => {
    let refInstance: any = useRef()

    useEffect(() => {
        let method = (e: any) => !refInstance.current?.contains(e.target) && handler()
        document.addEventListener('mousedown', method)
        
        return () => document.removeEventListener('mousedown', method)
    }, [])

    return refInstance
}

export default OutsideElementClick