var config = require('./webpack.config.js')

config.entry = {
  'vue2vis': './src/main.build.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'Vue2Vis',
  libraryTarget: 'umd'
}


module.exports = config
