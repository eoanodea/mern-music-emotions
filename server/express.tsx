/**
 * Import primary dependencies
 */
import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "../template";

/**
 * Import Routes
 */
import trackRoutes from "./routes/track.routes";

/**
 * Config environment variables
 */

import config from "../config/config";

/**
 * Modules for server side rendering
 */

import React from "react";
import ReactDOMServer from "react-dom/server";
import MainRouter from "../client/MainRouter";
import theme from "../client/assets/js/theme";

const StaticRouter = require("react-router-dom").StaticRouter;

/**
 * Material UI Theme & SSR
 */
import { MuiThemeProvider, ServerStyleSheets } from "@material-ui/core/styles";

const CURRENT_WORKING_DIR = process.cwd();
const app: Application = express();

/**
 * Compile Development Bundle
 */
import devBundle from "./devBundle";

if (config.env === "development") {
  devBundle.compile(app);
}

/**
 * Server Side Rending with Data
 */
import { matchRoutes } from "react-router-config";
import routes from "../client/routeConfig";

/**
 * Load branch data
 *
 * @param location string
 */
const loadBranchData = (location: string) => {
  const branch = matchRoutes(routes, location);
  const promises = branch.map(({ route, match }) => {
    return route.loadData
      ? route.loadData(branch[0].match.params)
      : Promise.resolve(null);
  });
  return Promise.all(promises);
};

/**
 * parse body params and attache them to req.body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());

/**
 * Secure apps by setting various HTTP headers
 */
app.use(helmet());
/**
 * enable CORS - Cross Origin Resource Sharing
 */
app.use(cors());

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

/**
 * Mount Routes
 *
 * @param {App} app
 */
function mountRoutes(app: Application) {
  app.use("/", trackRoutes);
}

mountRoutes(app);

/**
 * Handle Server Side Render
 *
 * @param {Request} req
 * @param {Response} res
 */
function handleRender(req: Request, res: Response): void {
  const sheets = new ServerStyleSheets();
  let context = {
    url: "",
  };

  loadBranchData(req.url)
    .then((data) => {
      const html = ReactDOMServer.renderToString(
        sheets.collect(
          <StaticRouter location={req.url} context={context}>
            <MuiThemeProvider theme={theme}>
              <MainRouter data={data} />
            </MuiThemeProvider>
          </StaticRouter>
        )
      );
      if (context.url) {
        return res.redirect(303, context.url);
      }
      const css = sheets.toString();

      res.status(200).send(Template(html, css));
    })
    .catch((err) => {
      // res.redirect("/");
      console.log("Error: ", err);
      res.status(500).send({"error": "Could not load React view with data", "Error Message": err})
    });
}

app.use(handleRender);

/**
 * Catch Unauthorized Errors
 */
// app.use({err: any, req: Request, res: Response }) => {
//   if (err.name === "UnauthorizedError") {
//     res.status(401).json({ error: err.name + ": " + err.message });
//   }
// });

export default app;
