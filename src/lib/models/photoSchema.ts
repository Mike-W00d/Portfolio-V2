import mongoose, { Document, Schema } from 'mongoose';

export interface IPhoto extends Document {
  src: string;
  description: string;
  height: number;
  width: number;
}

const photoSchema = new Schema({
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
});

const Photo = mongoose.models.Photo || mongoose.model<IPhoto>('Photo', photoSchema);

export default Photo;