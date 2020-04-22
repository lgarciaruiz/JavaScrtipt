//require is == import, just save to variable
const path = require('path');
const HtmlWebpackPlugn = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    //plugins receives an array
    plugins: [
        new HtmlWebpackPlugn({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};