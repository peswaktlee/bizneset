import type { NextConfig } from 'next'
import { resolve } from 'path'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: {
            compilationMode: 'annotation'
        }
    },
    webpack: (config) => {
        config.resolve.modules.push(resolve(__dirname, '../../'))

        config.module.rules.push({
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            exclude: /node_modules/
        })

        return config
    }
}

export default nextConfig