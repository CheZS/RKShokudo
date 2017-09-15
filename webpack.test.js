var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    watch: true
};
