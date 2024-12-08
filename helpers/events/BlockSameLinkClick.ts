import { AuthState } from '@/data/states'
import type { MouseEvent } from 'react'


const BlockSameLinkClick = (event: MouseEvent, isActive: boolean) => {
    const { SetAuthState } = AuthState.getState()

    if (isActive) {
        event.preventDefault()
        event.stopPropagation()
    }

    SetAuthState({ UserModal: false })
}

export default BlockSameLinkClick