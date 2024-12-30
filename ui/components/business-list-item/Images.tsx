import type { FC, ReactNode } from 'react'
import type { BusinessInterface } from '@/ts'

import { Fragment, useState } from 'react'
import { ImageOnDrag } from '@/helpers/events'

const Images: FC<BusinessInterface> = (props): ReactNode => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const { 
        Name, 
        Image, 
        Gallery 
    } = props

    return (
        <Fragment>
            {
                Gallery?.length === 0 && 
                <img
                    src={Image}
                    alt={Name}
                    onDragStart={ImageOnDrag}
                    className='rounded-lg w-full h-64 object-cover'
                />
            }

            {
                Gallery?.length > 0 && 
                <img
                    src={[Image, ...Gallery][currentIndex]}
                    alt={Name}
                    onDragStart={ImageOnDrag}
                    className='rounded-lg w-full h-64 object-cover'
                />
            }

            {
                Gallery.length > 0 && 
                <div className='w-full absolute bottom-0 right-0 left-0 flex py-2 justify-center items-center gap-1 pointer-events-none'>
                    {
                        [Image, ...Gallery].map((_, index) => {
                            const isActive = index === currentIndex

                            return (
                                <div 
                                    key={index}
                                    className={`w-2.5 h-2.5 bg-gray-50 pointer-events-auto rounded-full overflow-hidden ${isActive ? 'bg-blue-500' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        
                                        setCurrentIndex(index)
                                    }}
                                />
                            )
                        })
                    }
                </div>
            }
        </Fragment>
    )
}

export default Images