var path = require("path");

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    // global variable 'home'
    library: "home"
  }
};
