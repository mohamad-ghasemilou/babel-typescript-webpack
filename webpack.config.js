const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = [
    {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'index.js',
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(c|sa|sc)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: "body"
        }), new MiniCssExtractPlugin()],
        devServer: {
            port: 8080,
            static: path.resolve(__dirname, 'dist')
        }
    }
]
