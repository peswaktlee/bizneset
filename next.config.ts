import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: {
            compilationMode: 'annotation'
        }
    }
}

export default nextConfig