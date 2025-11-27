"use server"
import mongoose from "mongoose";

declare global {
  var _mongoose: Promise<typeof mongoose> | undefined;
}

export async function connectDB() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing");

  if (!global._mongoose) {
    global._mongoose = mongoose
      .connect(process.env.MONGODB_URI, { dbName: "SIMPEL_DB" })
      .then((m) => {
        console.log("MongoDB Connected");
        return m;
      });
  }

  return global._mongoose;
}
