import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("🔍 API: Checking MongoDB connection...");
    const connection = await connectToDatabase();

    // Check if connection is ready
    const state = connection.connection.readyState;
    const stateMessage = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    }[state] || "unknown";

    console.log(`📊 API: MongoDB connection state: ${state} (${stateMessage})`);

    return NextResponse.json({
      status: "success",
      connected: state === 1,
      state: stateMessage,
      database: connection.connection.db.databaseName,
      host: connection.connection.host,
    });
  } catch (error: any) {
    console.error("❌ API: MongoDB connection check failed:", error.message);
    return NextResponse.json(
      {
        status: "error",
        connected: false,
        error: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}