'use strict';

const path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      cssnano = require('cssnano'),
      webpack = require('webpack');

module.exports = {
  entry: './app/assets/javascripts/app.js',
  output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'app/assets/javascripts')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            }
          ],
        })
      },
      {
        test: /\.svg$/,
        use: 'url-loader?mimetype=image/svg+xml'
      },
      {
        test: /\.woff$/,
        use: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.woff2$/,
        use: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.eot$/,
        use: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        use: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../stylesheets/bootstrap.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcesser: cssnano,
      cssProcesserOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
}
