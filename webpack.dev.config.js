const { merge } = require('webpack-merge');
const base = require("./webpack.base.config.js");
var path = require("path");


const config = {
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
    }
}

module.exports = merge(base, config);