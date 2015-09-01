'use strict';
var webpack = require('webpack');
var plugins = [];

if (process.env.PRODUCTION) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = {
    entry: './index.js',
    output: {
        publicPath: '/build/',
        path: './build',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
    plugins: plugins
};
