import type { TermItem } from "@/types/project";

export const project = {
  documentType: "Project & Investment Opportunity Document",
  parent: "RTGroup",
  disciplines: [
    "Technology",
    "Entertainment",
    "Knowledge",
    "Opportunities",
    "Research & Development",
  ],
  quote:
    "We don't want to just talk about technology. We want to do it, showcase it, and connect it to market opportunities.",

  what: {
    intro:
      "TEKORA TV is an RTGroup project that aims to build a dedicated media platform for technology, innovation, practical education, research, business, and technology-related opportunities.",
    subheading: "TEKORA TV will be a platform that offers:",
    offerings: [
      "Technology news",
      "Conversations with experts",
      "Tutorials and practical knowledge",
      "Innovations and new projects",
      "AI, IoT, Robotics and Embedded Systems",
      "Electronics and Software",
      "Technology-driven business",
      "Job and training opportunities",
      "Research and student projects",
      "Interviews with professionals and company leaders",
    ],
    goalLabel: "Main goal",
    goal: "To build a strong technology platform that connects people, knowledge, technology, business, investors, and innovation.",
  },

  problem: {
    intro:
      "AI, IoT, Robotics, Software, Electronics, Automation, and Digital Transformation are changing how people learn, work, and do business. But there is a gap: many people hear about technology, but few see it applied in practical ways.",
    items: [
      {
        term: "Students",
        detail: "have good projects but nowhere to showcase them.",
      },
      {
        term: "Experts",
        detail: "have knowledge but no platform connecting them to the public.",
      },
      {
        term: "Companies",
        detail: "have solutions but need an audience that understands them.",
      },
      {
        term: "Innovators",
        detail: "have ideas but no visibility.",
      },
      {
        term: "Investors",
        detail: "want to find ideas that can become businesses.",
      },
      {
        term: "Young people",
        detail:
          "want to learn about technology and the opportunities around it.",
      },
    ] satisfies TermItem[],
    closing: "TEKORA TV will be the solution to this gap.",
  },

  solution: {
    intro:
      "TEKORA TV will not be just a news channel. It will be a technology and innovation platform that helps people take the following journey.",
    journey: [
      "Understand",
      "Learn",
      "Try",
      "Do",
      "Create",
      "Turn into opportunity",
    ],
    quotes: [
      "Technology should not only be explained; it must be shown and used.",
      "Technology should not only be explained. It should be experienced.",
    ],
  },

  programs: [
    {
      term: "TEKORA News",
      detail:
        "Technology news across AI, IoT, Robotics, Electronics, Software, Cybersecurity, Telecom, and Automation.",
    },
    {
      term: "TEKORA Interviews",
      detail:
        "Conversations with experts, engineers, entrepreneurs, researchers, and CEOs.",
    },
    {
      term: "TEKORA Practical",
      detail:
        "Showcasing working projects in IoT, AI, Electronics, Embedded Systems, Robotics, Smart Systems, and Automation.",
    },
    {
      term: "TEKORA Business",
      detail: "Showing how technology can become a business.",
    },
    {
      term: "TEKORA Innovation",
      detail: "Innovators and new projects.",
    },
    {
      term: "TEKORA Education",
      detail: "Tutorials and practical knowledge.",
    },
    {
      term: "TEKORA Opportunities",
      detail:
        "Jobs, internships, scholarships, competitions, training, and other opportunities.",
    },
  ] satisfies TermItem[],

  audience: [
    {
      term: "Students",
      detail: "TVET, universities, and secondary schools.",
    },
    {
      term: "Technology practitioners",
      detail:
        "Engineers, developers, technicians, researchers, and IT professionals.",
    },
    {
      term: "Entrepreneurs",
      detail: "Those with technology-based businesses.",
    },
    {
      term: "Companies",
      detail:
        "Organizations that want to promote technology products and services.",
    },
    {
      term: "Investors",
      detail:
        "Those looking for ideas, innovations, and people capable of putting them into action.",
    },
    {
      term: "The general public",
      detail:
        "Those who want to understand how technology is changing life and business.",
    },
  ] satisfies TermItem[],

  rtgroup: {
    intro:
      "TEKORA TV was not started by people watching technology from a distance. RTGroup already works in Electronics, IT, Embedded Systems, IoT, AI, Machine Learning, Digital Solutions, Technical Services, Practical Technology Training, and Technology Projects.",
    domains: [
      "Electronics",
      "IT",
      "Embedded Systems",
      "IoT",
      "AI",
      "Machine Learning",
      "Digital Solutions",
      "Technical Services",
      "Practical Technology Training",
      "Technology Projects",
    ],
    advantage:
      "This gives TEKORA TV a strong advantage: we will talk about what we do, show what we build, connect experts with the people who need them, and take technology out of words and into action.",
    tagline: "Learn. Build. Innovate.",
  },

  revenue: {
    intro:
      "The project is built so that it does not depend on a single source of revenue.",
    items: [
      {
        term: "Advertising",
        detail: "Companies advertising on TEKORA TV.",
      },
      {
        term: "Sponsorships",
        detail: "Organizations sponsoring specific shows or programs.",
      },
      {
        term: "Partnerships",
        detail: "Strategic partners co-producing programs.",
      },
      {
        term: "Content production",
        detail: "Professional technology content for companies.",
      },
      {
        term: "Events",
        detail: "Technology conferences, competitions, and exhibitions.",
      },
      {
        term: "Training",
        detail: "Professional technology education.",
      },
      {
        term: "Digital monetization",
        detail: "YouTube and other digital platforms.",
      },
      {
        term: "Product & technology showcase",
        detail: "Presenting and explaining products and solutions.",
      },
      {
        term: "Premium content",
        detail: "Paid content and services.",
      },
      {
        term: "Investment & strategic projects",
        detail: "Collaborating on technology-driven projects.",
      },
    ] satisfies TermItem[],
  },

  companies: {
    intro:
      "A partner will not be just an advertiser. They will be one of the builders of the technology ecosystem.",
    items: [
      {
        term: "Brand visibility",
        detail: "Becoming known among people passionate about technology.",
      },
      {
        term: "Product exposure",
        detail: "Showcasing products and services.",
      },
      {
        term: "Expert positioning",
        detail: "Staff and leaders give talks that build their reputation.",
      },
      {
        term: "Customer education",
        detail: "Explaining to customers how a technology or product works.",
      },
      {
        term: "Talent discovery",
        detail: "Finding capable students and experts.",
      },
      {
        term: "Networking",
        detail: "Being connected with other partners.",
      },
      {
        term: "Innovation",
        detail: "Working with people who have new ideas.",
      },
    ] satisfies TermItem[],
  },

  investors: {
    intro:
      "An investor will not simply put money into a TV channel. They are investing in building a Technology Media & Innovation Brand. As the audience grows, value can flow from:",
    flow: ["Content", "Community", "Business", "Technology Ecosystem"],
    supports: [
      "YouTube channel startup",
      "Studio, cameras, audio equipment, and lighting",
      "Production computers and internet infrastructure",
      "Marketing and audience growth",
      "Human resources",
      "Content production",
      "Events",
      "Digital expansion",
    ],
    brings:
      "RTGroup brings vision, technology expertise, execution, content development, and an existing technology ecosystem.",
  },

  partners: {
    intro:
      "RTGroup is looking for partners who can bring one or more of the following.",
    items: [
      {
        term: "Investment",
        detail: "Capital to expand operations.",
      },
      {
        term: "Technology",
        detail: "Equipment, software, and other tools.",
      },
      {
        term: "Expertise",
        detail: "Experts and knowledge.",
      },
      {
        term: "Distribution",
        detail: "Helping us reach more people.",
      },
      {
        term: "Marketing",
        detail: "Helping build an audience.",
      },
      {
        term: "Network",
        detail: "Connecting us with companies, institutions, and investors.",
      },
      {
        term: "Content",
        detail: "Co-producing programs and conversations.",
      },
    ] satisfies TermItem[],
  },

  ecosystem: {
    title: "Long-term goal: the TEKORA Technology Ecosystem",
    intro:
      "TEKORA begins as a media platform and grows into a connected technology ecosystem.",
    chain: [
      "TEKORA TV",
      "Technology News",
      "Interviews & Podcasts",
      "Practical Tutorials",
      "Technology Events",
      "Innovation Competitions",
      "Technology Community",
      "Training",
      "Research & Projects",
      "Business Connections",
      "Investment Opportunities",
    ],
    expansion:
      "In the future, TEKORA could expand beyond Rwanda, especially into the East African and African markets.",
  },

  closing: {
    intro:
      "RTGroup does not want to do this project alone. If you are an investor, a technology company, an entrepreneur, an engineer, a researcher, a university or TVET institution, a technology brand or media partner, or you have an idea, knowledge, or resources that could help TEKORA TV grow, we want to work with you.",
    vision:
      "Africa needs people who think for it, who are skilled, who experiment, who build for themselves, who turn technology into business, and who solve the community's problems. TEKORA TV wants to play a part in that journey.",
    quote:
      "We don't want to just talk about technology. We want to showcase it.",
    connect: [
      "Let's connect.",
      "Let's create.",
      "Let's innovate.",
      "Let's TEKORA.",
    ],
  },
} as const;

export type ProjectContent = typeof project;
