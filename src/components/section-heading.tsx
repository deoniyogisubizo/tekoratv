import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  meta?: string;
}

export function SectionHeading({ eyebrow, title, meta }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 border-t border-ink/10 py-10 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-3xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite">
          {eyebrow}
        </span>
        <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink">
          {title}
        </h2>
      </Reveal>
      {meta ? (
        <Reveal delay={0.1}>
          <span className="text-[11px] uppercase tracking-[0.3em] text-graphite md:text-right">
            {meta}
          </span>
        </Reveal>
      ) : null}
    </div>
  );
}
