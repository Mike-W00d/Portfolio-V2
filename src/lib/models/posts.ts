import { Schema, models, model, Types, Document } from "mongoose";

export interface IPost extends Document {
  slug?: string;
  title: string;
  date: string;
  coverImage: string;
  author: Types.ObjectId;
  excerpt: string;
  content: string;
  preview?: boolean;
}

export interface IPostDoc extends IPost, Document {}
const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    coverImage: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    preview: { type: Boolean, default: false },
  },
  // change timestamps to date and updated_at
  { timestamps: { createdAt: "date", updatedAt: "updated_at" } },
);

const Post = models?.Post || model<IPost>("Post", PostSchema);

export default Post;
