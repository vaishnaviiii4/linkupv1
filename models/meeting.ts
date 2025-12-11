import { Schema, model, models } from "mongoose";

const MeetingSchema = new Schema(
  {
    _id: { type: String, required: true }, // Use Stream call ID
    callId: { type: String, required: true },
    hostId: { type: String, ref: "User", required: true }, // Clerk user ID
    title: { type: String, required: true },
    description: { type: String },
    startsAt: { type: Date, required: true },
    tags: [{ type: String }],
    isCancelled: { type: Boolean, default: false },
    participants: [{ type: String, ref: "User" }],
  },
  { timestamps: true }
);

export const MeetingModel = models.Meeting || model("Meeting", MeetingSchema);