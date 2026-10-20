import { NextResponse } from "next/server";
import { getBroadcasts } from "@/lib/broadcasts";

export async function GET() {
  const broadcasts = await getBroadcasts(24);

  return NextResponse.json({
    count: broadcasts.length,
    broadcasts,
  });
}
