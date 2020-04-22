
import mongoose, { Schema, Document } from "mongoose";

export interface ReactionInterface extends Document {
  time: number;
  track: Schema.Types.ObjectId;
}

/**
 * Schema for a track reaction
 */
const ReactionSchema: Schema = new Schema({
  time: { type: Number, required: true, min: 0 },
  track: {type: Schema.Types.ObjectId, ref: "Track"}
});

const Reaction = mongoose.model<ReactionInterface>("Reaction", ReactionSchema);
export default Reaction;