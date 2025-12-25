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
  if (cached?.conn) {
    console.log("✅ MongoDB: Using cached connection");
    return cached.conn;
  }

  if (!cached?.promise) {
    console.log("🔄 MongoDB: Attempting to connect...");
    cached!.promise = mongoose
      .connect(MONGODB_URI as string, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB: Successfully connected!");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("❌ MongoDB: Connection failed:", error.message);
        throw error;
      });
  }

  try {
    cached!.conn = await cached!.promise;
    console.log("✅ MongoDB: Connection established and cached");
    return cached!.conn;
  } catch (error) {
    console.error("❌ MongoDB: Failed to establish connection:", error.message);
    throw error;
  }
};