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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
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