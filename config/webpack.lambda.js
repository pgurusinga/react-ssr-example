const { PUBLIC_PATH } = require('./pathConfig');
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  mode: 'development',

  // Tell webpack the root file of our
  // server application
  entry: './plans.lambda/index.js',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'plans.lambda.js',
    path: PUBLIC_PATH,
    publicPath: ''
  }
};

module.exports = merge(baseConfig, config);
