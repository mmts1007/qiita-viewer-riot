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
        loader: 'riot-tag-loader',
        options: { type: 'none' }
      },
      {
        test: /\.js$|\.tag$/,
        enforce: 'post',
        exclude: /node_modules/,
        loader:  'babel-loader'
      },
      { test: /\.css$/, enforce: 'post', loader: 'style-loader!css-loader' },
      { test: /\.svg$/, enforce: 'post', loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, enforce: 'post', loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, enforce: 'post', loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, enforce: 'post', loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, enforce: 'post', loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  devServer: {
    contentBase: './public'
  }
};
