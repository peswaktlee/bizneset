import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const Classes = (...classes: ClassValue[]) => twMerge(clsx(...classes))

export default Classes