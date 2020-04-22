import { Request, Response } from "express";
import Track from '../models/track.model'
import {handleSuccess, handleError} from '../helpers/responseHandler'
import {parseForm} from '../helpers/formHandler'
import * as _ from "lodash"
import fs from "fs";


/**
 * THIS NEEDS TO BE IMPROVED
 */
import mongoose from "mongoose";
const Grid = require("gridfs-stream");
eval(
  `Grid.prototype.findOne = ${Grid.prototype.findOne
    .toString()
    .replace("nextObject", "next")}`
);
/* Until gridfs-stream module is updated */
//@ts-ignore
Grid.mongo = mongoose.mongo;
let gridfs: { findOne: (arg0: { _id: string; }, arg1: (err: any, file: any) => Response<any> | undefined) => void; createReadStream: (arg0: { _id: any; range?: { startPos: number; endPos: number; }; }) => { ...; }; } | null = null;
mongoose.connection.on("connected", () => {
    //@ts-ignore
    gridfs = Grid(mongoose.connection.db, Grid.mongo);
});


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
        const tracks = await Track.find({}).select('title')
        
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
        const track = await Track.findById(id).select('title')
        
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
        const track = await Track.findByIdAndUpdate(id, req.body).select('title')
        
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

/**
 * Stream a track by it's ID
 * 
 * @param req 
 * @param res 
 */
export const audio = (req: Request, res: Response) => {
    gridfs.findOne(
      {
        _id: req.params._id,
      },
      (err: String, file: { length: string | number | string[] | undefined; contentType: string | string[] | undefined; _id: any; }) => {
        if (err) {
          console.log("NOTE TYPE OF ERROR error:", err, typeof err);
        //@ts-ignore
          return res.status(400).send(handleError(err));
        }
        if (!file) {
          return res.status(404).send(handleError("No video found"));
        }
  
        if (req.headers["range"]) {
          let parts = req.headers["range"].replace(/bytes=/, "").split("-");
          let partialstart = parts[0];
          let partialend = parts[1];
  
          let start = parseInt(partialstart, 10);
          let end = partialend ? parseInt(partialend, 10) : file.length - 1;
          let chunksize = end - start + 1;
  
          res.writeHead(206, {
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Range": "bytes " + start + "-" + end + "/" + file.length,
            'Content-Type': file.contentType
            // "Content-Type": "video/mp4",
          });
  
          gridfs
            .createReadStream({
              _id: file._id,
              range: {
                startPos: start,
                endPos: end,
              },
            })
            .pipe(res);
        } else {
          res.header("Content-Length", file.length);
          res.header('Content-Type', file.contentType)
  
          gridfs
            .createReadStream({
              _id: file._id,
            })
            .pipe(res);
        }
      }
    );
  };
