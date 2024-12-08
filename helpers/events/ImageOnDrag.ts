import { DragEvent } from 'react'

const ImageOnDrag = (event: DragEvent<HTMLImageElement>) => {
    event?.preventDefault()
}

export default ImageOnDrag