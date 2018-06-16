let path = require('path');
let ExtractTextPlugn = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');

let conf =  {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'dist/'
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

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production
                  ? false
                  : 'eval-sourcemap';
  return conf;
}
