import { RevealText } from "./reveal";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
        <RevealText
          text={eyebrow}
          className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite"
        />
        <h1 className="mt-8 max-w-5xl text-[clamp(2.8rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-ink">
          <RevealText text={title} />
        </h1>
        {description ? (
          <p className="mt-10 max-w-xl text-base font-medium leading-relaxed text-graphite">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
