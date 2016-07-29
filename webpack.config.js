'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

let path = require("path");

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    // global variable 'home'
    library: "home"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 200
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
      // LANG: JSON.stringify('ru');
    })
  ],

  module: {

    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015&optional[]=runtime'
      // loader: 'babel',
      // query: {
      //   presets: ['es2015', 'stage-0'],
      //   'optional[]': 'runtime'
      // }
    }]

  }

};
