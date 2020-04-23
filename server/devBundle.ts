/*
 * File: devBundle.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Monday, 20th April 2020 10:02:08 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Bundles the application in development mode
 * Last Modified: Thursday, 23rd April 2020 5:27:19 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



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
