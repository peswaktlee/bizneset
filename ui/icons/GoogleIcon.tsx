import type { FC, ReactNode } from 'react'
import type { IconComponentProps } from '@/ts'

const GoogleIcon: FC<IconComponentProps> = (props): ReactNode => {
    const { size } = props

    return (
        <svg width={size} viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M32.5 16.477C32.5 15.3424 32.3961 14.2515 32.2032 13.2043H16.8265V19.3933H25.6132C25.2347 21.3933 24.0844 23.0879 22.3553 24.2224V28.237H27.6317C30.7189 25.4515 32.5 21.3497 32.5 16.477Z' fill='#4285F4'/>
            <path fillRule='evenodd' clipRule='evenodd' d='M16.8265 32.1132C21.2347 32.1132 24.9304 30.6806 27.6317 28.237L22.3553 24.2224C20.8933 25.1824 19.0232 25.7496 16.8265 25.7496C12.5742 25.7496 8.97497 22.9351 7.69111 19.1532H2.23656V23.2987C4.92302 28.5278 10.4444 32.1132 16.8265 32.1132Z' fill='#34A853'/>
            <path fillRule='evenodd' clipRule='evenodd' d='M7.69111 19.1532C7.36458 18.1932 7.17904 17.1679 7.17904 16.1133C7.17904 15.0588 7.36457 14.0333 7.6911 13.0733V8.9279H2.23655C1.1308 11.0879 0.5 13.5315 0.5 16.1133C0.5 18.6952 1.13081 21.1387 2.23656 23.2987L7.69111 19.1532Z' fill='#FBBC05'/>
            <path fillRule='evenodd' clipRule='evenodd' d='M16.8265 6.47691C19.2236 6.47691 21.3757 7.28418 23.0677 8.86963L27.7505 4.28055C24.923 1.69873 21.2273 0.113281 16.8265 0.113281C10.4444 0.113281 4.92301 3.69881 2.23655 8.9279L7.6911 13.0733C8.97496 9.29153 12.5742 6.47691 16.8265 6.47691Z' fill='#EA4335'/>
        </svg>
    )
}

export default GoogleIcon
