import { Reveal } from "./reveal";

const WORDS = [
  {
    letter: "T",
    rest: "echnology",
    note: "The tools, systems, and engineering stories we put on air.",
    wide: true,
  },
  {
    letter: "E",
    rest: "ntertainment",
    note: "Culture, formats, and voices that make people want to watch.",
    wide: false,
  },
  {
    letter: "K",
    rest: "nowledge",
    note: "Practical education viewers can take and use the same day.",
    wide: false,
  },
  {
    letter: "O",
    rest: "pportunity",
    note: "Jobs, funding, partnerships, and programs worth knowing.",
    wide: false,
  },
  {
    letter: "R",
    rest: "esearch",
    note: "The ideas and experiments shaping what comes next.",
    wide: false,
  },
  {
    letter: "A",
    rest: "dvancement",
    note: "Progress for individuals, companies, and communities.",
    wide: true,
  },
] as const;

export function LetterCards() {
  return (
    <section className="border-y border-ink/10 bg-smoke">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite">
            The name
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
            Every letter of TEKORA stands for something we put on air.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORDS.map(({ letter, rest, note, wide }, index) => (
            <Reveal
              key={letter}
              y={16}
              delay={Math.min(index * 0.06, 0.3)}
              className={wide ? "sm:col-span-2" : undefined}
            >
              <article className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[10px] bg-paper px-6 py-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-l from-signal to-transparent"
                />
                <p className="text-ink">
                  <span className="text-[clamp(2.2rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.03em]">
                    {letter}
                  </span>
                  <span className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-light leading-none tracking-[-0.02em] text-graphite">
                    {rest}
                  </span>
                </p>
                <p className="text-sm leading-relaxed text-graphite">{note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
