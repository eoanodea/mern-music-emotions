const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const isDevelopment = process.env.NODE_ENV === "development"

const webpackConfig = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        '@babel/polyfill', './client/main.js',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, '/client/main.js')
    ],
    node: {
        fs: 'empty'
    },
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'babel-loader'
            //     ],
            // },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // }
        ],
    },

    optimization: {
        noEmitOnErrors: true
    },

    plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.EnvironmentPlugin({ ...process.env })
      ],
}

module.exports = webpackConfig
