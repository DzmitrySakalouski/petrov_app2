const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
 
module.exports = {
    entry: {app: path.join(__dirname, 'src/', 'index')},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    watch: true,

    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: 'babel-loader'
        },

        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: 'assets/img/[name].[ext]'
                }
            }
            
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
        
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                { 
                   loader: "file-loader",
                   options: {
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }))
        },
       
        {
            test: /\.(sass|scss)$/, exclude: /node_modules/, use: ['css-hot-loader']
            .concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }))
        },
    ]},
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new ExtractTextPlugin('styles-[name].css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery"
        })        
    ],
    resolve:{
        modules: ['node_modules']
    }
};