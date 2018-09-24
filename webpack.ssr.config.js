const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const serverLocation = 'public/';

const path = require('path');

// process ENV
const env = process.env;
const NODE_ENV = env.NODE_ENV || 'development';

module.exports = {

    entry: {
        server: './js/server/ssr.js'
    },
    
    output: {
        filename: 'js/server/server.js',
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
            }
        ]
    },

    plugins: [
        // used to disable css modules
        new webpack.NormalModuleReplacementPlugin(
            /\.scss$/,
            require.resolve('./js/server/nullStyle')
        ),

        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),

        // // https://webpack.js.org/guides/migrating/#uglifyjsplugin-sourcemap
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: {
                ie8: false
            },
            cache: true,
            parallel: true
        })
    ]
}