import type { FC, ReactNode } from 'react'
import { Fragment } from 'react'

const Decorations: FC = (): ReactNode => {
    return (
        <Fragment>
            <div className='absolute top-0 left-0 right-0 w-full h-[50%] bg-gradient-to-b from-black/50 rounded-lg' />
            <div className='absolute bottom-0 left-0 right-0 w-full h-[50%] bg-gradient-to-t from-black/50 rounded-lg' />
        </Fragment>
    )
}

export default Decorations