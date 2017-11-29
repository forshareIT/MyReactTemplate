'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

//try the environment variable,otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = merge(common,{
    devtool:'source-map',
    plugins:[
        new UglifyJSPlugin({
            sourceMap : true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production'),
                'ASSET_PATH':JSON.stringify('ASSET_PATH')
            }
        })
    ]
});