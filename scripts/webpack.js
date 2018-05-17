const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = module.exports = {
  plugins: [
    new ExtractTextPlugin("vue2vis.css"),
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
  library: ["vue2vis"],
  libraryTarget: "umd",
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

config.module = {
  loaders: [
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }),
    },
  ]
};
process.traceDeprecation = true;
if (process.env.NODE_ENV === 'production') {
  config.output.filename = "vue2vis.min.js"
  config.devtool = '#source-map';

  // Pass build environment inside bundle
  // This will strip comments in Vue code & hort-circuits all Vue.js warning code
  config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }));

  // The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));

  // Minify with dead-code elimination
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    sourceMap: true
  }));
} else {
  config.devtool = '#eval-source-map';
}
