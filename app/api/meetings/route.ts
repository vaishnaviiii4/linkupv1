import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";

import { connectToDatabase } from "@/lib/mongodb";
import { MeetingModel } from "@/models/meeting";

export const POST = async (req: Request) => {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const user = await currentUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const { callId, startsAt, description } = body as {
    callId: string;
    startsAt: string;
    description?: string;
  };

  if (!callId || !startsAt) {
    return new NextResponse("Missing callId or startsAt", { status: 400 });
  }

  await connectToDatabase();

  const title = description || "Instant meeting";

  await MeetingModel.findByIdAndUpdate(
    callId,
    {
      _id: callId,
      callId,
      hostId: userId,
      title,
      description,
      startsAt: new Date(startsAt),
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  return NextResponse.json({ ok: true });
};