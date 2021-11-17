const path = require('path');
const webpack = require('webpack');
let utils = require('./utils');
const config = require('./config');
const vueLoaderConfig = require('./vue-loader.conf');
const { VueLoaderPlugin } = require('vue-loader-v16');
const ESLintPlugin = require('eslint-webpack-plugin');


function resolve(dir) {
    // console.log(path.join(__dirname, '..', dir));
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: [ `./client/modules/main.js`],
    },
    target: ['web', 'es5'],
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', ".ts", ".tsx",".jsx"],
        modules: [
            resolve('client'),
            resolve('node_modules')
        ],
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@': resolve('client'),
            'assets': resolve('client/assets'),
            'common': resolve('client/common'),
            'modules': resolve('client/modules'),
            'components': resolve('client/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader-v16',
                options: vueLoaderConfig
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|tif|tiff|bmp)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('image/[name].[ext]'),
                    publicPath: '/',
                    esModule: false
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]'),
                    publicPath: '/',
                }
            },
            {
                test: /\.mp4(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[ext]')
                }
            },
        ]
    },
    plugins: [
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'json', 'vue'],
            exclude: '/node_modules/'
        }),
        //vue 3.x 增加了两个编译时配置：__VUE_OPTIONS_API__和__VUE_PROD_DEVTOOLS__，适当地配置它们能提高 tree shaking 的效果
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        }),
        new VueLoaderPlugin(),
    ]
};
