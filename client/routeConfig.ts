/*
 * File: routeConfig.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Tuesday, 21st April 2020 9:17:58 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Allows frontend data to be serverside rendered
 * Last Modified: Thursday, 23rd April 2020 5:30:11 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



import Home from "./pages/Home"
import ShowTrack from "./components/track/Show"
import { show } from "./components/track/api-track";

/**
 * Routes for serverside rendering
 */
const routes: Array<Object> = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/track/show/:id",
    component: ShowTrack,
    loadData: (params: any) => show(params)
  }
];

export default routes;
