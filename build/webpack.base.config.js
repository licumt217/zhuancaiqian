/**
 * Created by liqiang on 2017/5/21.
 */
var path = require('path');
var config = require('../config')
var webpack = require('webpack');
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var projectRoot = path.resolve(__dirname, '../');
module.exports = {

    entry: {
        index: path.join(projectRoot, 'src/index'),  //打包入口
        vendor:['vue','util']
    },
    output: {
         path: config.prod.assetsRoot,
         publicPath: process.env.NODE_ENV === 'production' ? config.prod.assetsPublicPath : config.local.assetsPublicPath,//根名称可配置
         filename: '[name].[hash].js',
         libraryTarget : 'var'
    },
     resolve: {
         extensions: [ '.js', '.vue'],
         //fallback: [path.join(__dirname, '../node_modules')],
         alias: {
             'vue':'vue/dist/vue.js',
             'src': path.resolve(__dirname, '../src'),
             'assets': path.resolve(__dirname, '../src/assets'),
             'util':path.join(projectRoot, 'src/assets/js/tjdUtils')
         }
     },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                        less: ExtractTextPlugin.extract({
                            use: 'css-loader!less-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }),

                    }
                }
            },

            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                // exclude: /node_modules/,
                include:[/node_modules\/vue/,/src/]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|otf|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=img/[name][hash:8].[ext]'
            },
            //{
            //    test: /\.(css)$/,
            //    loader:"style-loader!css-loader!postcss-loader"
            //}

        ].concat(utils.styleLoaders({ sourceMap: config.local.cssSourceMap,extract:true }))
    },
     plugins: [
         new webpack.ProvidePlugin({
             $: "jquery",
             jQuery: "jquery"
         }),
         new CommonsChunkPlugin({
             name: 'vendor',
             minChunks: Infinity
         }),
         //这个不添加allChunks参数的话，不会抽离chunk的css
         new ExtractTextPlugin({filename: 'css/[name].[hash:5].css', allChunks: false}),
     ],
}
