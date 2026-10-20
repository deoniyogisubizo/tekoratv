import { Reveal } from "./reveal";

const WORDS = [
  {
    letter: "T",
    rest: "echnology",
    note: "The tools, systems, and engineering stories we put on air.",
  },
  {
    letter: "E",
    rest: "ntertainment",
    note: "Culture, formats, and voices that make people want to watch.",
  },
  {
    letter: "K",
    rest: "nowledge",
    note: "Practical education viewers can take and use the same day.",
  },
  {
    letter: "O",
    rest: "pportunity",
    note: "Jobs, funding, partnerships, and programs worth knowing about.",
  },
  {
    letter: "R",
    rest: "esearch",
    note: "The ideas, experiments, and people shaping what comes next.",
  },
  {
    letter: "A",
    rest: "dvancement",
    note: "Progress for individuals, companies, and communities.",
  },
] as const;

export function LetterCards() {
  return (
    <section className="border-y border-ink/10 bg-smoke">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite">
              The name
            </p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              Every letter of TEKORA stands for something we put on air.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-graphite">
              It is not a slogan. It is the programming guide — the six things
              this channel exists to cover, in the order they reach the viewer.
            </p>
          </Reveal>
        </div>

        <ul className="md:col-span-8">
          {WORDS.map(({ letter, rest, note }, index) => (
            <Reveal
              key={letter}
              y={12}
              delay={Math.min(index * 0.05, 0.25)}
              className="h-full"
            >
              <li className="group flex flex-col gap-1 border-t border-ink/10 py-5 last:border-b sm:flex-row sm:items-baseline sm:gap-6">
                <span className="flex shrink-0 items-baseline">
                  <span className="w-[0.9em] text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-none tracking-[-0.03em] text-ink transition-colors duration-200 group-hover:text-signal">
                    {letter}
                  </span>
                  <span className="text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-none tracking-[-0.02em] text-graphite transition-colors duration-200 group-hover:text-ink">
                    {rest}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-graphite sm:pt-1">
                  {note}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
