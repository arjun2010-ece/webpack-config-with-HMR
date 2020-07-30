const { merge } = require('webpack-merge');
const base = require("./webpack.base.config.js");


const config = {
    devServer: {
        port: 8080,
        contentBase: "./dist"
    }
}

module.exports = merge(base, config);