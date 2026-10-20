# TEKORA TV

TEKORA TV is an **RTGroup** project: a technology and innovation media platform
covering technology news, interviews, practical builds, business, innovation,
education, and opportunities.

> Technology • Entertainment • Knowledge • Opportunities • Research & Development

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Biome check
- `npm run format` — Biome format

## Structure

- `src/app` — routes: home (project & investment document), `/schedule`, `/about`
- `src/components` — section and layout components
- `src/lib/project.ts` — all TEKORA TV project content
- `src/lib/site.ts` — branding, navigation, footer, and contact details
- `src/lib/broadcasts.ts` — program schedule (MongoDB, with a built-in seed)

## Configuration

Copy `.env.example` to `.env.local` and fill in what you need. MongoDB is
optional — without it the schedule falls back to the built-in TEKORA program
seed.

## Contact

RTGroup · RUZIMA MIZERO Didier · +250 785 866 529 · rtgrouprwanda@gmail.com

Learn. Build. Innovate. Let's TEKORA.
