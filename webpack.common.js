'use strict';
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入ExtractTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:[
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    plugins: [
        new ExtractTextPlugin('styles.css'), // 增加的行，样式将输出到styles.css
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            // title:'MyReactPro',
            template: './template/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common'   //指定公共的bundle的名称
        })
    ],
    output: {
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        // chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname,'public'),
        publicPath: "/"
    },
    module:{
        rules: [
            // {
            //     test:/\.css$/,
            //     use:[
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /-m\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]-[local]-[hash:base64:5]'
                            }
                        }
                    ]
                })
            },
            {
                test: /^((?!(-m)).)*\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:['env','stage-0','react'],  //从右向左顺序执行
                        plugins:[
                            ['react-hot-loader/babel'],
                            [
                                'import',
                                {
                                    "libraryName":"antd",
                                    "style":"css"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};