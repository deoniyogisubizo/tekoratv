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

const TONE_NUMBER: Record<Tone, string> = {
  paper: "text-signal group-hover:text-ink",
  smoke: "text-signal group-hover:text-ink",
  ink: "text-signal group-hover:text-white",
  signal: "text-white group-hover:text-ink",
};

function sentenceCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

interface ProjectSectionProps {
  id: string;
  index: string;
  eyebrow: string;
  description?: string;
  tone?: Tone;
  children: ReactNode;
}

export function ProjectSection({
  id,
  index,
  eyebrow,
  description,
  tone = "paper",
  children,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className={`group scroll-mt-16 border-t ${TONE_BORDER[tone]} ${TONE_BG[tone]}`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-4xl">
          <div className="flex items-center gap-5 md:gap-8">
            <span
              aria-hidden
              className={`shrink-0 text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.8] tracking-[-0.06em] tabular-nums transition-colors duration-300 ${TONE_NUMBER[tone]}`}
            >
              {index}
            </span>
            <span
              aria-hidden
              className={`h-px w-12 shrink-0 bg-current opacity-25 md:w-20`}
            />
            <h2 className="text-[clamp(1.4rem,2.8vw,2.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
              {sentenceCase(eyebrow)}
            </h2>
          </div>
          {description ? (
            <p
              className={`mt-10 max-w-2xl text-base font-medium leading-relaxed md:text-lg ${TONE_MUTED[tone]}`}
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
