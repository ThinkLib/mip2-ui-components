const path = require('path')
const merge = require('webpack-merge')
const HappyPack = require('happypack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { config: baseWebpackConfig, happyThreadPool } = require('./webpack.base.config')

// Helpers
const resolve = file => path.resolve(__dirname, file)

module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'happypack/loader?id=js',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: resolve('../dev'),
    publicPath: '/dev/',
    host: '0.0.0.0',
    port: process.env.PORT || '8888',
    disableHostCheck: true,
    open: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      // loaders: ['babel-loader', 'eslint-loader?cache=true?emitWarning=true']
      loaders: ['babel-loader']
    })
  ]
})
