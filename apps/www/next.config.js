const path = require('path')

module.exports = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: {
            compilationMode: 'annotation',
        }
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, '../../'),
        }

        config.resolve.extensions.push('.ts', '.tsx')

        config.module.rules.push({
            test: /\.tsx?$/,
            use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'next/babel', 
                                '@babel/preset-typescript'
                            ]
                        }
                    }
            ]
        })

        return config
    }
}
