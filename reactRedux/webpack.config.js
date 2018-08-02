var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bound.js',
        path: path.resolve(__dirname +　'\\')
    },
    module: {
        noParse: function(content) {
            return /jquery|lodash|react-redux|redux|react/.test(content);
        },
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname + '..\\node_modules\\')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}