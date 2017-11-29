const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev');
const compiler = webpack(config);

app.use('/',require('connect-history-api-fallback')());
app.use('/',express.static('public'));

// 配置热更新
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
    // stats:{colors:true},
    // lazy:false,
    // watchOptions:{
    //     aggregateTimeout:300,
    //     poll:true
    // }
}));





// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
