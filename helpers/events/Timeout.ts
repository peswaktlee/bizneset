const Timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export default Timeout