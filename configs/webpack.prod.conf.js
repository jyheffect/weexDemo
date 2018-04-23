const commonConfig = require('./webpack.common.conf');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const os = require('os');
const webpack = require('webpack');
const config = require('./config');
const helper = require('./helper');


const UglifyJsparallelPlugin = require('webpack-uglify-parallel');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/**
 * Generate multiple entrys
 * @param {Array} entry 
 */
const generateMultipleEntrys = (entry) => {
  const entrys = Object.keys(entry);
  const htmlPlugin = entrys.map(name => {
    return new HtmlWebpackPlugin({
      filename: name + '.html',
      template: helper.rootNode(`web/index.html`),
      isDevServer: true,
      chunksSortMode: 'dependency',
      inject: true,
      chunks: [name],
      minimize: true
    })
  })
  return htmlPlugin;
}

const weexConfig = webpackMerge(commonConfig[1], {
    output: {
      path: helper.rootNode('dist'),
      filename: '[name].js'
    },
    plugins: [
      new UglifyJsparallelPlugin({
        workers: os.cpus().length,
        mangle: true,
        compressor: {
          warnings: false,
          drop_console: true,
          drop_debugger: true
        }
      })
    ]
})

const webConfig = webpackMerge(commonConfig[0], {
  devtool: config.prod.devtool,
  output: {
    path: helper.rootNode('release/web'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.prod.env
      }
    }),
    ...generateMultipleEntrys(commonConfig[0].entry),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new UglifyJsparallelPlugin({
      workers: os.cpus().length,
      mangle: true,
      compressor: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    })
  ]
});

webpack(weexConfig, (err, stats) => {
  if (err) {
    console.err('COMPILE ERROR:', err.stack)
  }
})

module.exports = webConfig
