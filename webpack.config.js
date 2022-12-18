const path = require("path");

module.exports = [
    {
        entry: path.resolve(__dirname, 'src/index.js'),
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        devServer: {
            port: 8080,
            static: path.resolve(__dirname, 'dist')
        }
    }
]
