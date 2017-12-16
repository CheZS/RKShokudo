const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: './public/favicon.ico'
});

module.exports = (envOpts) => {
  let config = {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js'
    },
    externals: {
      "react": 'React',
      "react-dom": 'ReactDOM'
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(eot|svg|png)$/,
          loader: 'file-loader?name=[name].[ext]',
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      HtmlWebpackPluginConfig,
      new DashboardPlugin(),
      new CopyWebpackPlugin([{
        from: './public/manifest.json'
      }])
    ]
  };

  envOpts = envOpts || {};

  if (envOpts.MODE === 'devServer') {
    // Do not use UglifyJSPlugin when in devServer mode
    // For better build performance
  } else {
    config.plugins.push(
      new UglifyJSPlugin({
        sourceMap: true
      })
    );
  }

  return config;
};
