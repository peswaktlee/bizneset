import Link from 'next/link'
import Head from 'next/head'

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const Tw = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export {
    Link,
    Head,
    Tw
}