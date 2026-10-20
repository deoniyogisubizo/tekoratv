import type { ObjectId } from "mongodb";

export type BroadcastStatus = "live" | "upcoming" | "replay";

export type BroadcastCategory =
  | "News"
  | "Interviews"
  | "Practical"
  | "Business"
  | "Innovation"
  | "Education"
  | "Opportunities";

/**
 * The normalized shape consumed by the UI layer.
 * `id` is a stringified `_id` so it stays serializable across the
 * server/client boundary.
 */
export interface Broadcast {
  id: string;
  title: string;
  time: Date;
  thumbnailUrl: string;
  channel: string;
  category: BroadcastCategory;
  durationMinutes: number;
  status: BroadcastStatus;
  synopsis: string;
  streamUid?: string;
}

/**
 * The document shape as persisted in the `broadcasts` MongoDB collection.
 * Kept separate from `Broadcast` so database concerns (ObjectId, audit
 * timestamps) never leak into presentation components.
 */
export interface BroadcastDocument {
  _id?: ObjectId;
  title: string;
  time: Date;
  thumbnailUrl: string;
  channel: string;
  category: BroadcastCategory;
  durationMinutes: number;
  status: BroadcastStatus;
  synopsis: string;
  streamUid?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}
