const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
   plugins: [
        new HtmlWebpackPlugin({
            template: '/src/index.html',
        }),
        new MiniCSSExtractPlugin({
            filename: 'style.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            }, 
        ]    
    }   
} 
