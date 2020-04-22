import { Request, Response } from "express";
import Track from '../models/track.model'
import {handleSuccess, handleError} from '../helpers/responseHandler'
import {parseForm} from '../helpers/formHandler'
import * as _ from "lodash"
import fs from "fs";



/**
 * Create a track in the database
 * 
 * @param req 
 * @param res 
 */
export const create = async (req: Request, res: Response) => {
    try {        
        const parsedForm = await parseForm(req)
        let track = new Track(parsedForm.fields)
        track.data.data = fs.readFileSync(parsedForm.files.data.path)
        track.data.contentType = parsedForm.files.data.type
        
        const response = await track.save()

        return res.status(200).json(handleSuccess(response))
    } catch (err) {
        return res.status(400).json(handleError(err))
    }
}



/**
 * Retreive all tracks from the database
 * 
 * @param req 
 * @param res 
 */
export const list = async (req: Request, res: Response) => {
    try {
        const tracks = await Track.find({})
        
        return res.status(200).json(handleSuccess(tracks))
    } catch (err) {
        return res.status(400).json(handleError(err))
    }
}

/**
 * Retreive a track by ID from the database
 * 
 * @param req 
 * @param res 
 */
export const show = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const track = await Track.findById(id)
        
        return res.status(200).json(handleSuccess(track))
    } catch (err) {
        return res.status(400).json(handleError(err))
    }
}

/**
 * Update a track by ID 
 * 
 * @param req 
 * @param res 
 */
export const update = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const track = await Track.findByIdAndUpdate(id, req.body)
        
        return res.status(200).json(handleSuccess(track))
    } catch (err) {
        return res.status(400).json(handleError(err))
    }
}

/**
 * Delete a track by ID 
 * 
 * @param req 
 * @param res 
 */
export const remove = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const track = await Track.deleteOne({_id: id})
        
        return res.status(200).json(handleSuccess(track))
    } catch (err) {
        return res.status(400).json(handleError(err))
    }
}


