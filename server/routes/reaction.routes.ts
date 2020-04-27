/*
 * File: reaction.routes.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Thursday, 23rd April 2020 5:13:25 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Routes for the Reaction collection
 * Last Modified: Thursday, 23rd April 2020 5:21:01 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



import express from 'express'
import * as reactionCtrl from '../controllers/reaction.controller'

const router = express.Router()
const prefix = "/api/reaction"

/**
 * @method POST - Create a new reaction
 * @method GET - List all reactions by a track
 */
router.route(`${prefix}/:trackId?`)
    .post(reactionCtrl.create)
    .get(reactionCtrl.list)

/**
 * @method GET - Reaction By ID
 * @method PUT - Update a reaction by ID
 * @method DELETE - Delete a reaction by ID
 */
router.route(`${prefix}/:id`)
    .get(reactionCtrl.show)
    .put(reactionCtrl.update)
    .delete(reactionCtrl.remove)


export default router