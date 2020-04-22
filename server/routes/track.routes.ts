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

export default router