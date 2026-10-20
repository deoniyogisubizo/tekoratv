import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type Tone = "paper" | "smoke" | "ink" | "signal";

const TONE_BG: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  smoke: "bg-smoke text-ink",
  ink: "bg-ink text-white",
  signal: "bg-signal text-ink",
};

const TONE_MUTED: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/65",
  signal: "text-ink/70",
};

const TONE_BORDER: Record<Tone, string> = {
  paper: "border-ink/10",
  smoke: "border-ink/10",
  ink: "border-white/15",
  signal: "border-ink/15",
};

interface ProjectSectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: Tone;
  children: ReactNode;
}

export function ProjectSection({
  id,
  index,
  eyebrow,
  title,
  description,
  tone = "paper",
  children,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t ${TONE_BORDER[tone]} ${TONE_BG[tone]}`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-3xl">
          <span
            className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] ${TONE_MUTED[tone]}`}
          >
            <span className="tabular-nums">{index}</span>
            <span className="h-px w-8 bg-current opacity-40" aria-hidden />
            {eyebrow}
          </span>
          <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[0.98] tracking-[-0.04em]">
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-8 text-base font-medium leading-relaxed md:text-lg ${TONE_MUTED[tone]}`}
            >
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
