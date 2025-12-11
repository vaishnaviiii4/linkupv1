import "server-only";

import { currentUser } from "@clerk/nextjs/server";

import { connectToDatabase } from "@/lib/mongodb";
import { UserModel } from "@/models/user";

export const syncCurrentUserToDb = async () => {
  let user;

  try {
    user = await currentUser();
  } catch (err) {
    console.error("syncCurrentUserToDb: failed to load current user", err);
    return null;
  }

  if (!user) return null;

  try {
    await connectToDatabase();
  } catch (err) {
    console.error("syncCurrentUserToDb: failed to connect to MongoDB", err);
    return null;
  }

  const email = user.emailAddresses[0]?.emailAddress || "";

  const doc = await UserModel.findByIdAndUpdate(
    user.id,
    {
      _id: user.id,
      email,
      name: user.username || user.firstName || "",
      imageUrl: user.imageUrl,
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  return doc;
};
