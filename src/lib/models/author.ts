import { Schema, models, model, Document } from "mongoose";

export interface IAuthor extends Document {
  name: string;
  picture: string;
}

export interface IAuthorDoc extends IAuthor, Document {}
const AuthorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true },
);

export const Author = models?.Author || model<IAuthor>("Author", AuthorSchema);
