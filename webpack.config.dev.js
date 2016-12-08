var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'client')
            },
            // CSS
            {
                test: /\.css$/,
                loader: 'style!css',
                test: /\.less$/,
                loader: 'style!css!less',
                test: /\.sass$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'client'),
            }
        ]
    }
};
