import mongoose, { mongo, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  nama: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  nama: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
