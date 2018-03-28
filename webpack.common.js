var path = require('path'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          'sass-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      _img: path.resolve(__dirname, './src/assets/img'),
      _styles: path.resolve(__dirname, './src/assets/scss'),
      _js: path.resolve(__dirname, './src/js')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: './src/index.pug'
    }),
    new CopyWebpackPlugin([
      './src/assets/img/favicon.png'
    ])
  ]
}
