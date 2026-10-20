import type {
  Broadcast,
  BroadcastCategory,
  BroadcastStatus,
} from "@/types/broadcast";
import { cfImage } from "./cloudflare";

const HOUR = 60 * 60 * 1000;

interface SeedInput {
  title: string;
  offsetHours: number;
  thumbnailId: string;
  channel: string;
  category: BroadcastCategory;
  durationMinutes: number;
  status: BroadcastStatus;
  synopsis: string;
}

const SEED: SeedInput[] = [
  {
    title: "TEKORA News",
    offsetHours: 0,
    thumbnailId: "tekora-news",
    channel: "TEKORA TV",
    category: "News",
    durationMinutes: 30,
    status: "live",
    synopsis:
      "Technology news across AI, IoT, Robotics, Electronics, Software, Cybersecurity, Telecom, and Automation.",
  },
  {
    title: "TEKORA Interviews",
    offsetHours: 2,
    thumbnailId: "tekora-interviews",
    channel: "TEKORA TV",
    category: "Interviews",
    durationMinutes: 45,
    status: "upcoming",
    synopsis:
      "Conversations with experts, engineers, entrepreneurs, researchers, and company leaders.",
  },
  {
    title: "TEKORA Practical",
    offsetHours: 5,
    thumbnailId: "tekora-practical",
    channel: "TEKORA TV",
    category: "Practical",
    durationMinutes: 60,
    status: "upcoming",
    synopsis:
      "Working projects in IoT, AI, Electronics, Embedded Systems, Robotics, Smart Systems, and Automation.",
  },
  {
    title: "TEKORA Business",
    offsetHours: 9,
    thumbnailId: "tekora-business",
    channel: "TEKORA TV",
    category: "Business",
    durationMinutes: 40,
    status: "upcoming",
    synopsis: "How technology becomes a business, and where the market is.",
  },
  {
    title: "TEKORA Innovation",
    offsetHours: 13,
    thumbnailId: "tekora-innovation",
    channel: "TEKORA TV",
    category: "Innovation",
    durationMinutes: 35,
    status: "upcoming",
    synopsis: "Innovators and new projects coming out of the ecosystem.",
  },
  {
    title: "TEKORA Education",
    offsetHours: 17,
    thumbnailId: "tekora-education",
    channel: "TEKORA TV",
    category: "Education",
    durationMinutes: 50,
    status: "upcoming",
    synopsis: "Tutorials and practical knowledge you can apply today.",
  },
  {
    title: "TEKORA Opportunities",
    offsetHours: 21,
    thumbnailId: "tekora-opportunities",
    channel: "TEKORA TV",
    category: "Opportunities",
    durationMinutes: 30,
    status: "replay",
    synopsis:
      "Jobs, internships, scholarships, competitions, and training opportunities.",
  },
];

export function getSeedBroadcasts(): Broadcast[] {
  const base = new Date();
  base.setMinutes(0, 0, 0);

  return SEED.map((item, index) => ({
    id: `seed-${index + 1}`,
    title: item.title,
    time: new Date(base.getTime() + item.offsetHours * HOUR),
    thumbnailUrl: cfImage(item.thumbnailId, "thumb"),
    channel: item.channel,
    category: item.category,
    durationMinutes: item.durationMinutes,
    status: item.status,
    synopsis: item.synopsis,
  }));
}
