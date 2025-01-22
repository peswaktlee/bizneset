import { FC, useEffect, useRef } from 'react'
import { LinkIconFunctionProps } from '@/ts'
import { ImageOnDrag } from '@/helpers/events'
import { GetDomainFromLink } from '@/helpers/events'
import { CDN_ASSETS } from '@/data/constants'

const LinkWebsiteIcon: FC<LinkIconFunctionProps> = (props) => {
    const { link } = props

    const IconReference = useRef<HTMLImageElement | null>(null)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (IconReference.current && IconReference.current.complete === false) {
                IconReference.current.src = CDN_ASSETS.WORLD_ICON 
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [link])

    return (
        <div className='mr-1 bg-[#F1ECFD] rounded-xl p-2'>
            <img
                ref={IconReference}
                onDragStart={ImageOnDrag}
                alt={link}
                src={GetDomainFromLink(link)}
                className='w-5 select-none h-5 opacity-75'
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                    const target = e.target as HTMLImageElement
                    target.src = CDN_ASSETS.WORLD_ICON 
                }}
            />
        </div>
    )
}

export default LinkWebsiteIcon