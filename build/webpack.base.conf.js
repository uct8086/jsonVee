const path = require('path');
let utils = require('./utils');
const config = require('./config');
const vueLoaderConfig = require('./vue-loader.conf');
const ESLintPlugin = require('eslint-webpack-plugin');
// const eslintFriendlyFormatter = require('eslint-friendly-formatter');


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
            vue$: "vue/dist/vue.esm.js",
            '@': resolve('client'),
            'assets': resolve('client/assets'),
            'common': resolve('client/common'),
            'modules': resolve('client/modules'),
            'components': resolve('client/components'),
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-webpack-plugin',
            //     enforce: "pre",
            //     include: [resolve('client'), resolve('test')],
            //     options: {
            //         formatter: eslintFriendlyFormatter
            //     }
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
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
    ]
};
