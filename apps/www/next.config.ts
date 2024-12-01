import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: {
            compilationMode: 'annotation'
        }
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*.html'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/:path(.+).html',
                destination: '/:path',
                permanent: true
            }
        ]
    }
}

export default nextConfig