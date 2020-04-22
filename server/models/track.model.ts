
import mongoose, { Schema, Document } from "mongoose";

export interface TrackInterface extends Document {
  title: string;
}
/**
 * Schema for an audio track
 */
const TrackSchema: Schema = new Schema({
  title: { type: String, required: true },
  data: {data: Buffer, contentType: String}
});

const Track = mongoose.model<TrackInterface>("Track", TrackSchema);
export default Track;