// see http://vuejs-templates.github.io/webpack for documentation.
let path = require("path");
let dis = process.argv[2] || "";
let proxyPort = 8050;

let ApiPrefix = '/webserver';

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, `../dist/${dis}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${dis}`),
    assetsSubDirectory: "",
    assetsPublicPath: `/${dis}/`,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
    //manifestFileName: 'manifest-doctor.json'
  },
  dev: {
    env: require("./dev.env"),
    port: 8778,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      '/detail': {//入参
        target: `http://localhost:${proxyPort}`,
        changeOrigin: true,
        pathRewrite: {
          '^/detail': '/detail'//入参代理的Url
        }
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
};
