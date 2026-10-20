import Image from "next/image";
import Link from "next/link";
import { getBroadcasts } from "@/lib/broadcasts";
import type { Broadcast, BroadcastStatus } from "@/types/broadcast";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const TIME_FORMAT = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
});

const DAY_FORMAT = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

const STATUS_LABEL: Record<BroadcastStatus, string> = {
  live: "On Air",
  upcoming: "Upcoming",
  replay: "Replay",
};

const STATUS_STYLE: Record<BroadcastStatus, string> = {
  live: "bg-signal text-ink",
  upcoming: "border border-ink/20 text-graphite",
  replay: "text-graphite",
};

function ScheduleRow({
  broadcast,
  index,
}: {
  broadcast: Broadcast;
  index: number;
}) {
  return (
    <li className="group border-t border-ink/10">
      <Reveal y={24} delay={Math.min(index * 0.04, 0.3)}>
        <Link
          href="/schedule"
          className="grid grid-cols-12 items-center gap-x-6 gap-y-4 py-7 transition-colors"
        >
          <div className="col-span-12 flex items-baseline gap-4 md:col-span-2 md:block">
            <time className="block text-lg font-light tabular-nums tracking-tight text-ink">
              {TIME_FORMAT.format(broadcast.time)}
            </time>
            <span className="text-[11px] uppercase tracking-[0.2em] text-graphite">
              {DAY_FORMAT.format(broadcast.time)}
            </span>
          </div>

          <div className="col-span-12 md:col-span-5">
            <h3 className="text-xl font-light tracking-tight text-ink transition-colors group-hover:text-graphite md:text-2xl">
              {broadcast.title}
            </h3>
            <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-graphite">
              {broadcast.synopsis}
            </p>
          </div>

          <div className="col-span-6 hidden md:col-span-2 md:block">
            <span className="text-[11px] uppercase tracking-[0.2em] text-graphite">
              {broadcast.category}
            </span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-ink">
              {broadcast.channel}
            </span>
          </div>

          <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-3 md:justify-end md:gap-6">
            <span
              className={`inline-flex h-7 items-center px-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                STATUS_STYLE[broadcast.status]
              }`}
            >
              {STATUS_LABEL[broadcast.status]}
            </span>
            <span className="relative h-12 w-20 shrink-0 overflow-hidden bg-ink">
              {broadcast.thumbnailUrl ? (
                <Image
                  src={broadcast.thumbnailUrl}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(135deg,#050505,#1c2a36)]"
                />
              )}
            </span>
          </div>
        </Link>
      </Reveal>
    </li>
  );
}

export async function ScheduleSection() {
  const broadcasts = await getBroadcasts(12);

  return (
    <section className="bg-smoke">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
        <SectionHeading
          eyebrow="Programming / Live Grid"
          title="On TEKORA TV."
          meta="Synced from the network"
        />
        <ul className="border-b border-ink/10">
          {broadcasts.map((broadcast, index) => (
            <ScheduleRow
              key={broadcast.id}
              broadcast={broadcast}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ScheduleSkeleton() {
  return (
    <section className="bg-smoke">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
        <SectionHeading
          eyebrow="Programming / Live Grid"
          title="On TEKORA TV."
          meta="Syncing…"
        />
        <ul className="border-b border-ink/10">
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder rows
            <li key={index} className="border-t border-ink/10 py-7">
              <div className="grid grid-cols-12 items-center gap-x-6 gap-y-4">
                <div className="col-span-2 h-4 w-16 bg-ink/10" />
                <div className="col-span-5 h-5 w-2/3 bg-ink/10" />
                <div className="col-span-2 h-3 w-16 bg-ink/10" />
                <div className="col-span-3 ml-auto h-12 w-28 bg-ink/10" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
