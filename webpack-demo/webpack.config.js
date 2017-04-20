var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    entry: {
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
        main: './src/script/main.js'   
    },
    output: {
        publicPath: 'http://cdn.com',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index-1.html',
            inject: false,
            title: 'webpck is good',
            date: new Date(),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            title: 'a is good',
            chunks: ['a', 'main'],
            inject: false
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            title: 'b is good',
            chunks: ['b', 'main'],
            inject: false
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'c.html',
            title: 'c is good',
            excludeChunks: ['a', 'b'],
            inject: false
        })
    ]
}