const ImageOnError = (e: DragEvent) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
}

export default ImageOnError