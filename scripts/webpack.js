const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = module.exports = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

// Set context to root of project
config.context = path.resolve(__dirname, '..');

// Client entry
config.entry = {
  vue2vis: path.resolve(__dirname, '../src/main')
};

// Basic output config
config.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'vue2vis.js',
  library: ['vue2vis'],
  libraryTarget: 'umd',
  globalObject: 'this',
};

config.externals = ['visjs', 'vue'];
// Resolver config
config.resolve = {
  extensions: ['.js', '.vue'],
  enforceExtension: false
};

config.externals = [{
  'vis': {
    umd: 'vis',
    global: 'vis',
    root: 'vis',
    commonjs2: 'vis',
    commonjs: 'vis',
    amd: 'vis'
  }
}];

config.resolveLoader = {
  modules: config.resolve.modules
};
config.mode = 'production';
config.module = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      // important: exclude files in node_modules, otherwise it's going to be really slow!
      exclude: /node_modules|vendor/
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]',
      }
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
  ]
};
process.traceDeprecation = true;
if (process.env.NODE_ENV === 'production') {
  config.output.filename = 'vue2vis.min.js'
  config.devtool = '#source-map';
} else {
  config.devtool = '#eval-source-map';
}
