const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const glob = require("glob");

module.exports = {
    entry: {
        vendor: [ "jquery", "bootstrap", "easyui" ],
        web: [ "./src/application/index.js", "./src/resource/index.less", ...glob.sync("./src/image/*") ]
        // error: [ "./src/error/index.js", "index.less"]
    },
    output: {
        path: path.resolve("./public/assets/"),
        publicPath: "/public/assets/",
        filename: "[name]/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: "url-loader!file-loader?limit=8192&name=/icons/[name].[ext]"
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("./[name]/bundle.css")
    ],
};
