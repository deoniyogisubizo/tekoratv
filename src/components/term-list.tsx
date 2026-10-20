import type { TermItem } from "@/types/project";
import { Reveal } from "./reveal";

type Tone = "paper" | "smoke" | "ink" | "signal";

const TONE_BORDER: Record<Tone, string> = {
  paper: "border-ink/10",
  smoke: "border-ink/10",
  ink: "border-white/15",
  signal: "border-ink/15",
};

const TONE_TERM: Record<Tone, string> = {
  paper: "text-ink",
  smoke: "text-ink",
  ink: "text-white",
  signal: "text-ink",
};

const TONE_DETAIL: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/65",
  signal: "text-ink/70",
};

interface TermListProps {
  items: readonly TermItem[];
  columns?: 1 | 2;
  tone?: Tone;
  numbered?: boolean;
}

export function TermList({
  items,
  columns = 1,
  tone = "paper",
  numbered = true,
}: TermListProps) {
  const border = TONE_BORDER[tone];

  if (columns === 2) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={item.term}
            className={`border-t ${border} md:border-r md:even:border-r-0`}
          >
            <Reveal y={24} delay={Math.min(index * 0.03, 0.24)}>
              <div className="flex items-start gap-5 py-8 md:px-8 md:first:pl-0">
                {numbered ? (
                  <span
                    className={`pt-1 text-[11px] font-medium tabular-nums tracking-[0.2em] ${TONE_DETAIL[tone]}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <div>
                  <h3
                    className={`text-xl font-light tracking-tight ${TONE_TERM[tone]} md:text-2xl`}
                  >
                    {item.term}
                  </h3>
                  <p
                    className={`mt-3 max-w-md text-sm font-medium leading-relaxed ${TONE_DETAIL[tone]}`}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`border-b ${border}`}>
      {items.map((item, index) => (
        <li key={item.term} className={`border-t ${border}`}>
          <Reveal y={24} delay={Math.min(index * 0.03, 0.24)}>
            <div className="grid grid-cols-12 gap-x-6 gap-y-2 py-7">
              <div className="col-span-12 flex items-baseline gap-4 md:col-span-4">
                {numbered ? (
                  <span
                    className={`text-[11px] font-medium tabular-nums tracking-[0.2em] ${TONE_DETAIL[tone]}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <h3
                  className={`text-xl font-light tracking-tight ${TONE_TERM[tone]} md:text-2xl`}
                >
                  {item.term}
                </h3>
              </div>
              <p
                className={`col-span-12 max-w-2xl text-base font-medium leading-relaxed md:col-span-8 ${TONE_DETAIL[tone]}`}
              >
                {item.detail}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
