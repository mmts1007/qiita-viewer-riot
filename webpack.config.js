var webpack = require('webpack');

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        options: { type: 'none' }
      },
      {
        test: /\.js$|\.tag$/,
        enforce: 'post',
        exclude: /node_modules/,
        loader:  'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './public'
  }
};
