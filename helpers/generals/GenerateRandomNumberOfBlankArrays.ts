const GenerateRandomNumberOfBlankArrays = (min: number, max: number): Array<number> => {
    return Array.from({ length: Math.floor(Math.random() * (max - min + 1)) + min }, () => Math.random())
}

export default GenerateRandomNumberOfBlankArrays