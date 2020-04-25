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
    const reactions = await Reaction.deleteMany({track: ObjId})
    
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

      return res.status(200).json(handleSuccess({track, reactions}));
    });
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Defines the Promise type return value for trackByID
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
       * Set the content type of that of the track data
       * and the ranges to bytes
       */
      res.set("content-type", "audio/mp3");
      res.set("Accept-Ranges", "bytes");

      /**
       * Define the GridFSBucket using the mongoose DB connection
       */
      let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "tracks",
      });

      // let file = bucket.find({_id: track._id})
      // console.log('finding file', file)

      /**
       * Open a download stream from GridFSBucket Object
       * Using the track ID
       */
      let downloadStream = bucket.openDownloadStream(track._id);

      /**
       * Event listener to sending data chunks
       */
      downloadStream.on("data", (chunk) => {
        res.write(chunk);
      });

      /**
       * Event listener for an error
       */
      downloadStream.on("error", (err) => {
        console.log("Download stream error", err);
        res.sendStatus(404);
      });

      /**
       * Event listener for when there is no more data to send
       */
      downloadStream.on("end", () => {
        res.end();
      });
    })

    .catch((err) => {
      return res.status(404).json(handleError("Track does not exist"));
    });
};
