const { merge } = require('webpack-merge');
const base = require('./webpack.base.config.js');


const config = {
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}

module.exports = merge(base, config);