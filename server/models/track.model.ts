
import mongoose, { Schema, Document } from "mongoose";

interface TrackInterface extends Document {
  title: string;
}
/**
 * Schema for an audio track
 */
const TrackSchema: Schema = new Schema({
  title: { type: String, required: true }
});

const Track = mongoose.model<TrackInterface>("Track", TrackSchema);
export default Track;