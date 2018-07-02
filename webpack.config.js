let path = require('path');
let ExtractTextPlugn = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');

let conf =  {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugn.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
        /*use: [
          'style-loader',
          'css-loader'
        ]*/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugn("style.css"),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};

module.exports = conf;
