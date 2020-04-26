/*
 * File: track.controller.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:24:54 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Controller for the Track Model
 * Last Modified: Thursday, 23rd April 2020 5:13:57 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

/**
 * Primary dependencies
 */
import { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
import multer from "multer";

/**
 * NodeJS Dependency
 */
import { Readable } from "stream";

/**
 * Model Schema
 */
import Track from "../models/track.model";

/**
 * Helpers for sucess and error responses
 */
import { handleSuccess, handleError } from "../helpers/responseHandler";
import Reaction from "../models/reaction.model";

/**
 * Create a track in the database
 *
 * @param req
 * @param res
 */
export const create = (req: Request, res: Response) => {
  const storage = multer.memoryStorage();
  /**
   * Define limits for file validation
   */
  const limits = {
    fields: 1,
    fileSize: 6000000,
    files: 1,
    parts: 2,
  };
  const upload = multer({ storage: storage, limits });

  /**
   * Commence the upload from the Request
   */
  upload.single("data")(req, res, (err) => {
    if (err) return res.status(400).json(handleError(err));

    const readableTrackStream = new Readable();
    readableTrackStream.push(req.file.buffer);
    /**
     * Send null to tell Readable there is no more
     * data to upload
     */
    readableTrackStream.push(null);

    /**
     * Define the GridFSBucket using the mongoose DB connection
     */
    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "tracks",
    });

    /**
     * Create a new Track from the Track Model
     */
    let track = new Track();
    track.title = req.body.title;

    /**
     * Commence the uplaod stream
     */
    let uploadStream = bucket.openUploadStreamWithId(track._id, track.title);
    readableTrackStream.pipe(uploadStream);

    /**
     * Listen for upload error and send a 500 response
     */
    uploadStream.on("error", () => {
      return res.status(500).json(handleError("Error uploading file"));
    });

    /**
     * On successful upload, save the track
     */
    uploadStream.on("finish", () => {
      track.save();
      return res.status(200).json(handleSuccess(track));
    });
  });
};

/**
 * Retreive all tracks from the database
 *
 * @param req
 * @param res
 */
export const list = async (req: Request, res: Response) => {
  try {
    const tracks = await Track.find({}).select("title created");

    return res.status(200).json(handleSuccess(tracks));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Retreive a track by ID from the database
 *
 * @param req
 * @param res
 */
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const track = await Track.findById(id).select("title created");

    return res.status(200).json(handleSuccess(track));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Update a track by ID
 *
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const track = await Track.findByIdAndUpdate(id, req.body).select("title");

    /**
     * Define the GridFSBucket using the mongoose DB connection
     */
    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "tracks",
    });

    /**
     * Rename the track in GridFSBucket
     */
    bucket.rename(track?._id, req.body.title, function (err) {
      if (err) return res.status(400).json(handleError(err));

      return res.status(200).json(handleSuccess(track));
    });
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Delete a track by ID
 *
 * @param req
 * @param res
 */
export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    /**
     * Create a mongoose ObjectID from the id in the route params
     * used for GridFSBucket
     */
    const ObjId = new mongoose.Types.ObjectId(id);

    /**
     * Remove any reactions associated with the track
     */
    const reactions = await Reaction.deleteMany({ track: ObjId });

    /**
     * Remove the track object
     */
    const track = await Track.deleteOne({ _id: id });

    /**
     * Define the GridFSBucket using the mongoose DB connection
     */
    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "tracks",
    });

    /**
     * Rename the track in GridFSBucket
     */
    bucket.delete(ObjId, function (err) {
      if (err) return res.status(400).json(handleError(err));

      return res.status(200).json(handleSuccess({ track, reactions }));
    });
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Type check for a Track
 */
type ITrack = {
  _id: mongoose.Types.ObjectId;
  title: string;
};

/**
 * Get the track by it's ID within an async Promise
 *
 * @param {Request} req
 */
export const trackByID = (req: Request) => {
  return new Promise<ITrack>(async function (resolve, reject) {
    try {
      const { id } = req.params;
      const track: any = await Track.findById(id);

      resolve(track);
    } catch (err) {
      reject(err);
      return;
    }
  });
};

/**
 * Stream a track by it's ID
 *
 * @param req
 * @param res
 */
export const audio = (req: Request, res: Response) => {
  trackByID(req)
    .then((track) => {
      /**
       * Define the GridFSBucket using the mongoose DB connection
       */
      let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "tracks",
      });

      /**
       * Find file meta data by it's ID
       */
      bucket.find(track._id).toArray((err, files) => {
        if (err || !files || files.length === 0) {
          console.log("error", err);
          return res.status(404).json(handleError("File not found"))
        } 
        let file = files[0]
        let options = undefined      

      /**
       * If the request headers include a range,
       * partially load the bytes to the frontend
       */
      /**
       * Commented out because it seems to break everything
       */
      // if(req.headers["range"]) {
      //   let parts = req.headers["range"].replace(/bytes=/, "").split("-");
      //   let partialstart = parts[0];
      //   let partialend = parts[1];

      //   let start = partialstart ? parseInt(partialstart, 10) : 0;
      //   let end = partialend ? parseInt(partialend, 10) : file.length - 1;
      //   let chunksize = (end - start) + 1;

      //   /**
      //    * Set patial response headers
      //    */
      //   res.writeHead(206, {
      //     "Connection": "keep-alive",
      //     "Accept-Ranges": "bytes",
      //     "Content-Range": "bytes " + start + "-" + end + "/" + file.length,
      //     "Content-Length": file.length,
      //     "Content-Type": "audio/mp3",
      //   });

      //   options = {
      //     start, 
      //     end
      //   }

      // } else {
        /**
         * Set the response headers
         */
        res.writeHead(200, {
          "Content-Length": file.length,
          "Accept-Ranges": "bytes",
          "Content-Type": "audio/mp3"
        })
      // }

      /**
       * Open a download stream from GridFSBucket Object
       * Using the track ID, and Pipe the response 
       */
      bucket.openDownloadStream(track._id, options).pipe(res);
      });
    })

    .catch((err) => {
      return res.status(404).json(handleError("Track does not exist"));
    });
};
