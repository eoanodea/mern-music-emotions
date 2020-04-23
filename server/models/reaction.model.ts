/*
 * File: reaction.model.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:12:42 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Model which represents the Reaction Schema
 * Last Modified: Thursday, 23rd April 2020 5:14:06 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */


import mongoose, { Schema, Document } from "mongoose";

interface ReactionInterface extends Document {
  time: number;
  track: Schema.Types.ObjectId;
  emotion: string;
}

/**
 * Schema for a track reaction
 */
const ReactionSchema: Schema = new Schema({
  time: { type: Number, required: true, min: 0 },
  emotion: {type: String, enum: ["Happy", "Sad", "Fear", "Anger"], required: true},
  track: {type: Schema.Types.ObjectId, ref: "Track"}
});

const Reaction = mongoose.model<ReactionInterface>("Reaction", ReactionSchema);
export default Reaction;