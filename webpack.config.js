const { WebPlugin } = require('web-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AuthorInfoPlugin = require('./webpack-plugin-test/author-info.js');
// const path = require('path');

// function resolve (dir) {
//     return path.join(__dirname, '..', dir)
// }

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    devServer: {
        inline: true,
        open: true,
        port: 8080,
        compress: true,
        // host: ip.address(),
        progress: true,
        historyApiFallback: true,
        contentBase: "./",
        https: false,
        // proxy: c.prox
    },
    plugins: [
        // new webpack.optimization.splitChunks({
        //     names: ['vendor', 'manifest']
        // }),
        new WebPlugin({
            filename: 'index.html',
            requires: ['app', 'vendor']
        }),
        new VueLoaderPlugin(),
        new AuthorInfoPlugin({
            name: 'crowphy'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
}