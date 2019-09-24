var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var eslintFriendlyFormatter = require('eslint-friendly-formatter')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    //'eye': './client/modules/list/main.js',
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
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg|tif|tiff|bmp)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('image/[name].[hash:7].[ext]'),
        publicPath: '/',
      },
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        publicPath: '/',
      }
    },
    {
      test: /\.mp4(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    /* {
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    } */
    ]
  }
}
