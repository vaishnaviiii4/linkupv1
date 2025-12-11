import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached = (global as any).mongoose as MongooseCache | undefined;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached?.conn) return cached.conn;

  if (!cached?.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI as string, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
};