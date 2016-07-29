var path = require("path");

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    // global variable 'home'
    library: "home"
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 200
  },

  devtool: "cheap-inline-module-source-map"

};
