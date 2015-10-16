var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var HOST = 'localhost';
var PORT = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(PORT, HOST, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + PORT);
});
