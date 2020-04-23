import { Request, Response, NextFunction } from "express";
import Track from "../models/track.model";
import { handleSuccess, handleError } from "../helpers/responseHandler";
import { parseForm } from "../helpers/formHandler";
import * as _ from "lodash";
import fs from "fs";
import mongoose from "mongoose";

/**
 * Create a track in the database
 *
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
  try {
    const parsedForm = await parseForm(req);
    let track = new Track(parsedForm.fields);
    track.data.data = fs.readFileSync(parsedForm.files.data.path);
    track.data.contentType = parsedForm.files.data.type;

    const response = await track.save();

    return res.status(200).json(handleSuccess(response));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Retreive all tracks from the database
 *
 * @param req
 * @param res
 */
export const list = async (req: Request, res: Response) => {
  try {
    const tracks = await Track.find({}).select("title");

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
    const track = await Track.findById(id).select("title");

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

    return res.status(200).json(handleSuccess(track));
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
    const track = await Track.deleteOne({ _id: id });

    return res.status(200).json(handleSuccess(track));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Stream a track by it's ID
 *
 * @param req
 * @param res
 */
export const audio = (req: Request, res: Response) => {
  let track: any;

  try {
    const { id } = req.params;
    track = Track.findById(id).select("_id");
  } catch (err) {
    return res.status(404).json(handleError("Track does not exist"));
  }

  /**
   * Set the content type of that of the track data
   * and the ranges to bytes
   */
  res.set("content-type", track.data.contentType);
  res.set("accept-ranges", "bytes");

  /**
   * Define the GridFSBucket using the mongoose DB connection
   */
  let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "tracks",
  });

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
  downloadStream.on("error", () => {
    res.sendStatus(404);
  });

  /**
   * Event listener for when there is no more data to send
   */
  downloadStream.on("end", () => {
    res.end();
  });
};
