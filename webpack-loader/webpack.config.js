var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: ['ejs-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "postcss-loader" // compiles Less to CSS 
                }, {
                    loader: "less-loader" // compiles Less to CSS 
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is a a.html',
            excludeChunks: ['b', 'c']
        }),
        new webpack.LoaderOptionsPlugin({

            options: {

                postcss: [

                    require('autoprefixer')({

                        broswers: ['last 5 versions']

                    })

                ]

            }

        })

    ]
}