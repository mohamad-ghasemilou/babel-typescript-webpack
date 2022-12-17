module.exports = [
    {
        entry: "./src/index.js",
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        }
    }
]
