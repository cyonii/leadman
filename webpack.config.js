const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'frontend/static/frontend'),
    // clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
