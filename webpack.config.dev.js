const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' },
                }
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new Dotenv({
            path: './.env'
        })
    ]
}