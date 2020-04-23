/*
 * File: config.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Tuesday, 21st April 2020 9:12:04 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Imports environment variables and allows them to be accessed during runtime
 * Last Modified: Thursday, 23rd April 2020 5:29:38 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */


import dotenv from 'dotenv'
dotenv.config()

const config = {
    env: process.env.ENV_MODE || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET, 
    mongoUri: process.env.MONGO_URI || "",
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000"
}

export default config
  