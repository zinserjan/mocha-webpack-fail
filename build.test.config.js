// js config for mocha-webpack
// unfortunately it is not currently possible to directly use this if written in typescript.

const webpack = require('webpack');

module.exports = {
    // mocha-webpack fills in the entry point and output paths
    module: {
        loaders: [
            {
                test: /\.js.{0,1}$/,
                exclude: /node_modules/,
                loader: 'raw',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'ts-loader',
                ],
            },
            {
                test: /\.txt$/,
                loader: 'raw',
            },
        ],
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    },
    target: 'electron',
};
