const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {  index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.styl$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]__[hash:base64:5]',
            url: false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'stylus-loader'
        }
      ],
    },
  ]},
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
    compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};