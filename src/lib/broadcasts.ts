import { cacheLife, cacheTag } from "next/cache";
import type { Broadcast, BroadcastDocument } from "@/types/broadcast";
import { getDb, isMongoConfigured } from "./mongodb";
import { getSeedBroadcasts } from "./seed";

export const BROADCASTS_CACHE_TAG = "broadcasts";
const COLLECTION = "broadcasts";

function toBroadcast(doc: BroadcastDocument): Broadcast {
  return {
    id: doc._id ? String(doc._id) : crypto.randomUUID(),
    title: doc.title,
    time: new Date(doc.time),
    thumbnailUrl: doc.thumbnailUrl,
    channel: doc.channel,
    category: doc.category,
    durationMinutes: doc.durationMinutes,
    status: doc.status,
    synopsis: doc.synopsis,
    streamUid: doc.streamUid,
  };
}

export async function getBroadcasts(limit = 12): Promise<Broadcast[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag(BROADCASTS_CACHE_TAG);

  if (!isMongoConfigured()) {
    return getSeedBroadcasts().slice(0, limit);
  }

  try {
    const db = await getDb();
    const docs = await db
      .collection<BroadcastDocument>(COLLECTION)
      .find({})
      .sort({ time: 1 })
      .limit(limit)
      .toArray();

    if (docs.length === 0) {
      return getSeedBroadcasts().slice(0, limit);
    }

    return docs.map(toBroadcast);
  } catch (error) {
    console.error(
      "[broadcasts] MongoDB unavailable, serving seed schedule.",
      error,
    );
    return getSeedBroadcasts().slice(0, limit);
  }
}
