var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'server/server.js'),
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'bundledServer.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
