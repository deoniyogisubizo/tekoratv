import { Reveal } from "./reveal";

type Tone = "paper" | "smoke" | "ink" | "signal";

const TONE_BORDER: Record<Tone, string> = {
  paper: "border-ink/10",
  smoke: "border-ink/10",
  ink: "border-white/15",
  signal: "border-ink/15",
};

const TONE_TEXT: Record<Tone, string> = {
  paper: "text-ink",
  smoke: "text-ink",
  ink: "text-white",
  signal: "text-ink",
};

const TONE_INDEX: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/55",
  signal: "text-ink/60",
};

const COLUMNS: Record<1 | 2 | 3, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
};

interface BulletGridProps {
  items: readonly string[];
  tone?: Tone;
  columns?: 1 | 2 | 3;
}

export function BulletGrid({
  items,
  tone = "paper",
  columns = 2,
}: BulletGridProps) {
  return (
    <ul className={`grid ${COLUMNS[columns]}`}>
      {items.map((item, index) => (
        <li key={item} className={`border-t ${TONE_BORDER[tone]}`}>
          <Reveal y={20} delay={Math.min(index * 0.02, 0.2)}>
            <div className="flex items-baseline gap-4 py-6 md:pr-8">
              <span
                className={`text-[11px] font-medium tabular-nums tracking-[0.2em] ${TONE_INDEX[tone]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-base font-medium leading-relaxed tracking-tight ${TONE_TEXT[tone]} md:text-lg`}
              >
                {item}
              </span>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
