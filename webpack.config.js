var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'sourcemaps',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/app.dev'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            path.join(__dirname, 'app'),
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot', 
                    'babel?' + [
                        'optional[]=es7.classProperties',
                        'optional[]=es7.decorators'
                    ].join('&')
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'] 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url!img?optimizationLevel=7'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=application/vnd.ms-fontobject'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?mimetype=image/svg+xml'
            }
        ]
    }
};
