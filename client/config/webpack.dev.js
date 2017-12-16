const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = env => {
    return webpackMerge(commonConfig(env), {
        devtool: 'source-map'
    });
}
