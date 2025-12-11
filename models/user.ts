import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    _id: { type: String, required: true }, // Clerk user ID
    email: { type: String, required: true },
    name: { type: String },
    imageUrl: { type: String },
    role: { type: String, default: "user" },
    timezone: { type: String, default: "UTC" },
    totalMeetingMinutes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const UserModel = models.User || model("User", UserSchema);