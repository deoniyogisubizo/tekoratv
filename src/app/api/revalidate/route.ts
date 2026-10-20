import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { BROADCASTS_CACHE_TAG } from "@/lib/broadcasts";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  revalidateTag(BROADCASTS_CACHE_TAG, "max");

  return NextResponse.json({ ok: true, revalidated: BROADCASTS_CACHE_TAG });
}
