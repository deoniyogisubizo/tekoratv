import type { FooterColumn, NavItem } from "@/types/broadcast";
import { cfImage, streamMp4 } from "./cloudflare";
import { project } from "./project";

export const site = {
  name: "TEKORA TV",
  wordmark: "TEKORA",
  parent: project.parent,
  url: "https://tekora.tv",
  tagline: project.disciplines.join(" • "),
  meaning: {
    word: "TEKORA",
    expansion: [
      "Technology",
      "Entertainment",
      "Knowledge",
      "Opportunity",
      "Research",
      "Advancement",
    ],
  },
  description:
    "TEKORA TV is an RTGroup media platform for technology, innovation, practical education, research, business, and technology-related opportunities.",
  nav: [
    { label: "The Project", href: "/#project" },
    { label: "Programs", href: "/#programs" },
    { label: "Schedule", href: "/schedule" },
    { label: "Investors", href: "/#investors" },
    { label: "Partners", href: "/#partners" },
  ] satisfies NavItem[],
  cta: { label: "Get in touch", href: "/#contact" },
  contact: {
    organisation: "RTGroup",
    person: "RUZIMA MIZERO Didier",
    phone: "+250 785 866 529",
    phoneHref: "tel:+250785866529",
    email: "rtgrouprwanda@gmail.com",
    emailHref: "mailto:rtgrouprwanda@gmail.com",
  },
  footer: [
    {
      heading: "The Project",
      links: [
        { label: "What is TEKORA TV", href: "/#project" },
        { label: "Programs", href: "/#programs" },
        { label: "Investors", href: "/#investors" },
        { label: "Partners", href: "/#partners" },
      ],
    },
    {
      heading: "Platform",
      links: [
        { label: "Schedule", href: "/schedule" },
        { label: "About RTGroup", href: "/about" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      heading: "Contact",
      links: [
        {
          label: "rtgrouprwanda@gmail.com",
          href: "mailto:rtgrouprwanda@gmail.com",
        },
        { label: "+250 785 866 529", href: "tel:+250785866529" },
        { label: "RTGroup Rwanda", href: "/about" },
      ],
    },
  ] satisfies FooterColumn[],
} as const;

export const media = {
  hero: {
    video:
      process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
      streamMp4(process.env.NEXT_PUBLIC_HERO_STREAM_UID ?? "") ||
      "/animation/1014.mp4",
    poster:
      process.env.NEXT_PUBLIC_HERO_POSTER_URL ||
      cfImage(process.env.NEXT_PUBLIC_HERO_IMAGE_ID ?? "", "hero"),
  },
};
