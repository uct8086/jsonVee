var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var path = require('path')
var readdir = require('readdir')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
//var dis = process.argv[2];
var urls = require('../client/common/urls/index');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

/* var filesArray = readdir.readSync(path.resolve(__dirname), [`modules/dev/webpack.${dis}.conf.js`])
console.log('filesArray', filesArray)
filesArray.forEach(file => {
  var conf = require(path.resolve(__dirname, file))
  baseWebpackConfig = merge(baseWebpackConfig, conf)
}); */

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `index.html`,
      urls:urls,
      inject: true,
      chunks: ['vendor', 'manifest', 'app']
    }),
    new FriendlyErrorsPlugin()
  ]
})
