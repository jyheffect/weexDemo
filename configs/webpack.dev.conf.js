const commonConfig = require('./webpack.common.conf');
const webpackMerge = require('webpack-merge');
// tools
const webpack = require('webpack');
const ip = require('ip').address();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const config = require('./config');
const utils = require('./utils');
const helper = require('./helper');

/**
 * Generate multiple entrys
 * @param {Array} entry 
 */
const generateHtmlWebpackPlugin = (entry) => {
  let entrys = Object.keys(entry);
  const htmlPlugin = entrys.map(name => {
    return new HtmlWebpackPlugin({
      filename: name + '.html',
      template: helper.rootNode(`web/index.html`),
      isDevServer: true,
      chunksSortMode: 'dependency',
      inject: true,
      chunks: [name]
    })
  })
  return htmlPlugin;
}
const devWebpackConfig = webpackMerge(commonConfig[0], {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  devtool: config.dev.devtool,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.dev.env
      }
    }),
    ...generateHtmlWebpackPlugin(commonConfig[0].entry),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  devServer: {
    clientLogLevel: 'warning',
    compress: true,
    contentBase: config.dev.contentBase,
    host: config.dev.host,
    port: config.dev.port,
    historyApiFallback: config.dev.historyApiFallback,
    public: config.dev.public,
    open:config.dev.open,
    watchContentBase: config.dev.watchContentBase,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    proxy: config.dev.proxyTable,
    quiet: true,
    openPage: config.dev.openPage,
    watchOptions: config.dev.watchOptions
  }
});
const weexConfig = webpackMerge(commonConfig[1], {
  watch: true
})

webpack(weexConfig, (err, stats) => {
  if (err) {
    console.err('COMPILE ERROR:', err.stack)
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.devServer.public = `${ip}:${port}`
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
