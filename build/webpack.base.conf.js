const path = require('path')
let utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill', `./client/modules/main.js`],
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('client'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('client'),
      'assets': resolve('client/assets'),
      'common': resolve('client/common'),
      'modules': resolve('client/modules'),
      'components': resolve('client/components'),
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: "pre",
      include: [resolve('client'), resolve('test')],
      options: {
        formatter: eslintFriendlyFormatter
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('client'), resolve('test')]
    },
    {
      test: /\.(png|jpe?g|gif|svg|tif|tiff|bmp)(\?.*)?$/,
      loader: 'file-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('image/[name].[hash:7].[ext]'),
        publicPath: '/',
      },
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        publicPath: '/',
      }
    },
    {
      test: /\.mp4(\?.*)?$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader", // 将 JS 字符串生成为 style 节点
        "css-loader", // 将 CSS 转化成 CommonJS 模块
        "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
      ]
    },
    {
      test: /\.less$/,
      loader: 'less-loader' // 将 Less 编译为 CSS
    },
    ]
  }
}
