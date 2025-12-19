import mongoose, { Document, Schema } from "mongoose";

export interface IPhoto extends Document {
  src: string;
  description: string;
  height: number;
  width: number;
}

const photoSchema = new Schema(
  {
    src: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  },
);

// Add indexes for better query performance
photoSchema.index({ createdAt: -1 }); // For sorting by newest first if needed

const Photo =
  mongoose.models.Photo || mongoose.model<IPhoto>("Photo", photoSchema);

export default Photo;
