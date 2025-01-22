import { RefObject, useEffect, useRef } from 'react'

const OutsideElementClick = (handler: Function) => {
    let refInstance: RefObject<HTMLElement> = useRef(null)

    useEffect(() => {
        let method = (e: any) => !refInstance.current?.contains(e.target) && handler()
        document.addEventListener('mousedown', method)
        
        return () => document.removeEventListener('mousedown', method)
    }, [handler])

    return refInstance
}

export default OutsideElementClick