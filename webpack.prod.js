const merge = require('webpack-merge'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  common = require('./webpack.common.js'),
  webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    })
  ]
})
