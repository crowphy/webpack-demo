const { WebPlugin } = require('web-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const InjectDivPlugin = require('./div-webpack-plugin/index');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.common'
        }
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
            },
            {
                test: /\.js$/,
                loader: path.resolve('test-webpack-loader'),
                options: {}
            }
        ],
    },
    devServer: {
        inline: true,
        open: true,
        port: 8080,
        compress: true,
        progress: true,
        historyApiFallback: true,
        contentBase: "./",
        https: false,
    },
    plugins: [
        new WebPlugin({
            filename: 'index.html',
            requires: ['app', 'vendor'],
            inject: true
        }),
        new VueLoaderPlugin(),
        new InjectDivPlugin({
            eleId: 'app'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html'
        // })
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