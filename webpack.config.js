'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

let path = require("path");
let sources = path.join(__dirname, 'frontend');

module.exports = {

  context: sources,

  entry: {
    app: "./app"
  },

  output: {
    path: path.join(__dirname, 'public', '/js'),
    publicPath: 'js/',
    filename: "[name].js"
  },

  // watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 200
  },

  // devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
      // LANG: JSON.stringify('ru');
    })
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

  module: {

    loaders: [{
      test: /\.js$/,
      // exclude: /\/node_modules\//,
      // exclude: /node_modules/,
      include: sources,
      // loader: 'babel?presets[]=es2015&optional[]=runtime'
      // loader: 'babel?presets[]=es2015'
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]

    // noParse: /lodash\/lodash.js/
    // , noParse: /node_modules\/angular\/angular.js/

  }

};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
