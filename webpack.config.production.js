const merge = require('webpack-merge');
const webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build : path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

module.exports  = {
  entry : PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output : {
   path: PATHS.build,
   filename : 'bundle.js' 
  },
  module: {
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        test : /\.jsx?$/,
        loaders : ['babel?cacheDirectory'],
        include : PATHS.app
      },
      {
        test   : /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader',
        include : PATHS.app
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
    }})
  ]
};




