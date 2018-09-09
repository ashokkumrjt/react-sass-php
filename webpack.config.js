const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const serverLocation = 'public/';

const assetsPath = '/assets/';

module.exports = {

    devServer: {
        compress: true,
        stats: {
            all: false,
            errors: true,
            errorDetails: true
        }
    },

    entry: {
        homePage: './js/mediators/homePage.js'
    },
    
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, serverLocation),
        publicPath: serverLocation
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.scss$/,
                exclude: [/node_modules/],
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]' ,
                        publicPath: `${assetsPath}images/`,
                        outputPath: `${assetsPath}images/`
                    }
                }]
            },
            {
                test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]' ,
                    publicPath: `${assetsPath}fonts/`,
                    outputPath: `${assetsPath}fonts/`
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css'
        })
    ]
}