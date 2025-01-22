import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './**/*.{jsx,tsx}',
        './ui/components/**/*.{jsx,tsx}',
        './ui/views/**/*.{jsx,tsx}',
        './ui/**/*.{jsx,tsx}'
    ],
    options: {},
    theme: {}
}

export default config