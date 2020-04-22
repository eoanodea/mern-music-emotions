const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  name: "browser",
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "/client/main.tsx"),
  ],
  node: {
    fs: "empty",
  },
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
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
    ],
  },

  optimization: {
    noEmitOnErrors: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ ...process.env }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
