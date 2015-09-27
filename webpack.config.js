var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { 
    app: './src/js/main.js', 
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].js',
    publicPath: '/public2/assets/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
