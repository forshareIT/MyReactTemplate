'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack');

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./public'
    },
    plugins:[
        // new BundleAnalyzerPlugin({
        //     reportFilename:'report.html'
        // }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});