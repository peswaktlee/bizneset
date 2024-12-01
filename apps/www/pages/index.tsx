import type { FC, ReactNode } from 'react'
import { Translation } from '~/helpers/generals'

const Home: FC = (): ReactNode => {
    return <h1>
        {Translation('hello')}
        j
    </h1>
}

export default Home