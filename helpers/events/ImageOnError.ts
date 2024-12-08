const ImageOnError = (e: any) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
}

export default ImageOnError