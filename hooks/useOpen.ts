import type { UseOpenFunctionReturnTypes } from '@/ts'

import { useState } from 'react'
import { OutsideElementClick } from '@/helpers/events'

const useOpen = (): UseOpenFunctionReturnTypes => {
    const [open, setOpen] = useState<boolean>(false)

    const DropdownCloserNormal = OutsideElementClick(() =>  setOpen(false))

    return {
        open,
        setOpen,
        ref: DropdownCloserNormal
    }
}

export default useOpen