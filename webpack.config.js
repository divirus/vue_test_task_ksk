const path = require('path');
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  mode: "development",
  // context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
      },
      {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }
      }
    ]
  }, 
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({template: './index.html'})
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  }
}