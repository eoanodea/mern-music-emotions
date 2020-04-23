/*
 * File: track.routes.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:42:27 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Routes for the Track collection
 * Last Modified: Thursday, 23rd April 2020 5:14:48 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */


import express from 'express'
import * as trackCtrl from '../controllers/track.controller'

const router = express.Router()
const prefix = "/api/track"

/**
 * @method POST - Create a new track
 * @method GET - List all tracks
 */
router.route(`${prefix}`)
    .post(trackCtrl.create)
    .get(trackCtrl.list)

/**
 * @method GET - Track By ID
 * @method PUT - Update a track by ID
 * @method DELETE - Delete a track by ID
 */
router.route(`${prefix}/:id`)
    .get(trackCtrl.show)
    .put(trackCtrl.update)
    .delete(trackCtrl.remove)

/**
 * @method GET - Stream Track Audio By ID
 */
router.route(`${prefix}/audio/:id`)
    .get(trackCtrl.audio)

export default router