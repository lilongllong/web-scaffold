const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const port = 8000;
const server = new WebpackDevServer(webpack(config), {
     publicPath: config.output.publicPath
}).listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8000');
});
