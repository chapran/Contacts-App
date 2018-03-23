var merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  webpack = require('webpack');

module.exports = merge(common, {
  devServer: {
    port: 5000,
    contentBase: './dist',
    hot: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
