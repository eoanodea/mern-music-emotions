import config from "../config/config";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
const webpackConfig = require("../webpack.config.client.js");

const compile = (app: any) => {
  if (config.env === "development") {
    console.log("MERN Music Emotions System - Starting in Development");
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
};

export default {
  compile,
};
