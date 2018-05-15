const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");

const config = {
    entry :  './src/main.js',
    output : {
        path : path.resolve(__dirname, './build'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test : /\.js$/,
                use : ['babel-loader'],
                include : path.resolve(__dirname, "./src"),
                exclude : /node_modules/
                
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
               {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
              },
              {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]?[hash]'
                }
              }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        })
        // ,
        // new openBrowserWebpackPlugin({
        //     url : "http://localhost:8080"
        // })
    ]
};

module.exports = config;