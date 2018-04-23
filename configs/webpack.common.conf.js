const path = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('./config');
const helper = require('./helper');
const vueLoaderConfig = require('./vue-loader.conf');
const vueWebTemp = helper.rootNode(config.templateDir);
const hasPluginInstalled = fs.existsSync(helper.rootNode(config.pluginFilePath));
const isWin = /^win/.test(process.platform);
const webEntry = {};
const weexEntry = {};

const getEntryFileContent = (entryPath, vueFilePath) => {
  let relativeVuePath = path.relative(path.join(entryPath, '../'), vueFilePath);
  let relativeEntryPath = helper.root(config.entryFilePath);
  let relativePluginPath = helper.rootNode(config.pluginFilePath);

  let contents = '';
  let entryContents = fs.readFileSync(relativeEntryPath).toString();
  if (isWin) {
    relativeVuePath = relativeVuePath.replace(/\\/g, '\\\\');
    relativePluginPath = relativePluginPath.replace(/\\/g, '\\\\');
  }
  if (hasPluginInstalled) {
    contents += `\n// If detact plugins/plugin.js is exist, import and the plugin.js\n`;
    contents += `import plugins from '${relativePluginPath}';\n`;
    contents += `plugins.forEach(function (plugin) {\n\tweex.install(plugin)\n});\n\n`;
    entryContents = entryContents.replace(/weex\.init/, match => `${contents}${match}`);
    contents = ''
  }
  contents += `\nconst App = require('${relativeVuePath}');\n`;
  contents += `new Vue(Vue.util.extend({el: '#root'}, App));\n`;
  return entryContents + contents;
}
const getEntryFile = (dir) => {
  dir = dir || '.';
  const directory = helper.rootDir(dir);
  fs.readdirSync(directory).forEach((file) => {
    const fullpath = path.join(directory, file);
    const stat = fs.statSync(fullpath);
    const extname = path.extname(fullpath);
    if (stat.isFile() && extname === '.vue') {
      const name = path.join(dir, path.basename(file, extname));
      if (extname === '.vue') {
        const entryFile = path.join(vueWebTemp, dir, path.basename(file, extname) + '.js');
        fs.outputFileSync(path.join(entryFile), getEntryFileContent(entryFile, fullpath));
        webEntry[name] = path.join(entryFile) + '?entry=true';
      }
      weexEntry[name] = fullpath + '?entry=true';
    }
    else if (stat.isDirectory() && ['build', 'include', 'component'].indexOf(file) === -1) {
      const subdir = path.join(dir, file);
      getEntryFile(subdir);
    }
  });
}
//入口文件
getEntryFile();

const plugins = [
  new webpack.BannerPlugin({
    banner: '// { "framework": "Vue"} \n',
    raw: true,
    exclude: 'Vue'
  })
];
const webConfig = {
  entry: webEntry,
  output: {
    path: helper.rootNode('./dist'),
    filename: '[name].web.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': helper.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules(?!(\/|\\).*(weex).*)/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'vue-loader',
          options: Object.assign(vueLoaderConfig({useVue: true, usePostCSS: false}), {
            optimizeSSR: false,
            postcss: [
              require('postcss-plugin-weex')(),
              require('autoprefixer')({
                browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
              }),
              require('postcss-plugin-px2rem')({
                rootValue: 75,
                minPixelValue: 1.01
              })
            ],
            compilerModules: [
              {
                postTransformNode: el => {
                  require('weex-vue-precompiler')()(el)
                }
              }
            ]
          })
        }]
      }
    ]
  },
  plugins: plugins
};
const weexConfig = {
  entry: weexEntry,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': helper.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader',
          options: vueLoaderConfig({useVue: false})
        }]
      }
    ]
  },
  plugins: plugins,
  node: config.nodeConfiguration
};
module.exports = [webConfig, weexConfig];
