const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, '/client/main.js')
    ],
    node: {
        fs: 'empty'
    },
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.tsx|.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
              },
              {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: "file-loader",
              },
        ]
    },
    optimization: {
        noEmitOnErrors: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
    ]
}

module.exports = config
