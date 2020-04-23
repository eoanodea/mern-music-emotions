/*
 * File: server.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Monday, 20th April 2020 10:02:08 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Handles the connection with MongoDB
 * Last Modified: Thursday, 23rd April 2020 5:27:53 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



import config from '../config/config'
import app from './express'
import mongoose from 'mongoose'

/**
 * Mongoose Connection configurations
 */
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

/**
 * Creates a global mongoose promise
 */
mongoose.Promise = global.Promise

/**
 * Connect using the config mongoURI and options
 */
mongoose.connect(config.mongoUri, options)

/**
 * Listen for an error
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

/**
 * Listen on the specified port, and for any errors
 */
app.listen(config.port, () => {
  console.info('Server started on port %s.', config.port)
})
.on("error", (err) => {
  console.error("Server Error: ", err)
})
