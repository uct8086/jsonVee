var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var readdir = require('readdir')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ManifestPlugin    = require('webpack-manifest-plugin');
var WebpackAssetsManifest = require('webpack-assets-manifest');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
const DynamicPublicPathPlugin = require("dynamic-public-path-webpack-plugin");

var env = config.build.env
var urls = require('../client/common/urls/index');
// var prefix = "http://res.imtt.qq.com/lab-frontend-project";

/* var filesArray = readdir.readSync(path.resolve(__dirname), [`modules/prod/webpack.${dis}.conf.js`])
console.log('filesArray', filesArray)
filesArray.forEach(file => {
  var conf = require(path.resolve(__dirname, file))
  baseWebpackConfig = merge(baseWebpackConfig, conf)
}); */

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js'),
    publicPath: './'  //用了DynamicPublicPathPlugin，这里用相对路径修复css里的otf引用
  },

  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true, 
        drop_console: true 
      },
      sourceMap: false
    }),

    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: `index.html`,
      urls: urls,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      chunks: ['vendor', 'manifest', 'app']
    }),
/*     new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }), */
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    /* new WebpackAssetsManifest({
      output: path.resolve(__dirname, '../static', config.build.manifestFileName),
      //output: path.resolve(__dirname, '../static'),
      space: 2,
      writeToDisk: true,
      fileExtRegex: /\.\w{2,4}\.(?:map|gz)$|\.\w+$/i,
      sortManifest: true,
      merge: false,
      customize: function(key, value, originalValue, manifest) {
        let reg = /\.(js|css)$/i;
        if (!reg.test(key)) {
          return false;
        }
        return {
          key,
          value,
        }
      },
      done: function(manifest, stats) {
        console.log(`The manifest has been written to ${manifest.getOutputPath()}`);
        // console.log(stats); // Compilation stats
      }
    }), */

  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
