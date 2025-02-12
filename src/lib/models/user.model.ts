import { Schema, models, model, Document } from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

export interface IUserDoc extends IUser, Document {}
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
