var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var path = require('path')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../');
var merged=merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.local.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage

        //此三个插件用于页面热加载和实时更新
        //new webpack.optimize.OccurenceOrderPlugin(),//webpack 1.x版本需要
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            // filename: 'index.html',
            template: path.resolve(projectRoot, 'src/index.html'),
            favicon: './src/assets/images/home.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
        }),
    ]
});
console.log(merged)

module.exports = merged;
