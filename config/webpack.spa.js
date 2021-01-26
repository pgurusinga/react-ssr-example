
const { PUBLIC_PATH } = require('./pathConfig');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: './plans.spa/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'plans.spa.js',
    path: PUBLIC_PATH,
    publicPath: ''
  },
  devtool: 'inline-source-map'
};

module.exports = merge(baseConfig, config);
