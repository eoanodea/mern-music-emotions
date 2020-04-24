/*
 * File: track.model.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:12:42 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Model which represents the Track Schema
 * Last Modified: Thursday, 23rd April 2020 5:14:25 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */




import mongoose, { Schema, Document } from "mongoose";

interface TrackInterface extends Document {
  title: string;
  created: Date;
  updated: Date;
}
/**
 * Schema for an audio track
 */
const TrackSchema: Schema = new Schema({
  title: { type: String, required: true },
  created: {type: Date, default: Date.now},
  updated: {type: Date}
});

const Track = mongoose.model<TrackInterface>("Track", TrackSchema);
export default Track;