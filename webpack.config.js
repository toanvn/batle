/**
 * Created by qup on 6/16/17.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: [ 'style-loader', 'css-loader']}
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: 'app/index.html'
    })],
    devServer: {
        inline: true,
        contentBase: './',
        port: 9000,
        host: '192.168.2.218'
    }
}