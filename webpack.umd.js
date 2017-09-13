var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: 'node',
    entry: {
        'rk-shokudo': [
            path.resolve(__dirname, './index.js')
        ]
    },
    devtool: 'source-map',
    output: {
        filename: 'dist/[name].umd.js',
        library: 'rk-shokudo',
        libraryTarget: 'umd',
        publicPath: 'static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    externals: {
        log4js: 'log4js'
    },
    plugins: [
        // TODO
        // new HtmlWebpackPlugin({
        //   template: 'src/index.html',
        //   filename: 'index.html',
        //   files: {
        //     css: [ path.resolve(__dirname, 'static', 'css', 'rkshokudo.css') ],
        //     js: [ path.resolve(__dirname, 'static', 'js', 'rkshokudo.js') ],
        //     chunks: {
        //       head: {
        //         entry: [],
        //         css: [path.resolve(__dirname, 'static', 'css', 'rkshokudo.css')]
        //       },
        //       main: {
        //         entry: path.resolve(__dirname, 'static', 'js', 'rkshokudo.js'),
        //         css: []
        //       }
        //     }
        //   }
        // })
    ]
};
