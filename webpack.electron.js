'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const WMCCPackage = require('wmcc-package');
const str = JSON.stringify;
const env = process.env;

module.exports = {
  target: 'node',
  entry: {
    'wmcc-core': './src/wmcc-core-browser',
    'wmcc-worker': './src/workers/worker'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: {
    "node-x15": "node-x15",
    "leveldown": "leveldown",
    "secp256k1": "secp256k1",
    "wmcc-native": "wmcc-native",
    "wmcc-mutex": "wmcc-mutex",
    "wmcc-tcp": "wmcc-tcp",
    "wmcc-inet": "wmcc-inet",
    "wmcc-file": "wmcc-file",
    "wmcc-logger": "wmcc-logger"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WMCC_WORKER_FILE':
        str(env.WMCC_WORKER_FILE || 'wmcc-worker.js')
    }),
    new webpack.IgnorePlugin(/^utf-8-validate|bufferutil$/)
  ]
};