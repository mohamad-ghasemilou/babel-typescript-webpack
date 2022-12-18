const path = require("path");

module.exports = [
    {
        entry: path.resolve(__dirname, 'src'),
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                }
            ]
        },
        devServer: {
            port: 8080,
            static: path.resolve(__dirname, 'dist')
        }
    }
]
