import { Reveal } from "./reveal";

const WORDS = [
  {
    letter: "T",
    rest: "echnology",
    note: "AI, embedded systems, IoT, networks, and digital infrastructure — covered from the inside, by people who build them.",
    placement: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  },
  {
    letter: "E",
    rest: "ntertainment",
    note: "Documentaries, creator features, and culture formats that make technology enjoyable to watch.",
    placement: "lg:col-start-3 lg:col-span-2 lg:row-start-1",
  },
  {
    letter: "K",
    rest: "nowledge",
    note: "Tutorials and explainers that turn viewers into builders.",
    placement: "lg:col-start-3 lg:row-start-2",
  },
  {
    letter: "O",
    rest: "pportunity",
    note: "Funding calls, grants, tenders, jobs, accelerators, and partnerships — openings tech people must act on before they close.",
    placement: "lg:col-start-4 lg:row-start-2 lg:row-span-2",
  },
  {
    letter: "R",
    rest: "esearch",
    note: "Labs, universities, pilots, and experiments shaping what African tech does next.",
    placement: "lg:col-start-1 lg:col-span-3 lg:row-start-3",
  },
  {
    letter: "A",
    rest: "dvancement",
    note: "How a prototype becomes a product and a community gains a new capability.",
    placement: "lg:col-start-1 lg:col-span-4 lg:row-start-4",
  },
] as const;

export function LetterCards() {
  return (
    <section className="border-y border-ink/10 bg-smoke">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite">
            The name
          </p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.15] tracking-[-0.02em] text-ink">
            Every letter of TEKORA stands for something we put on air.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
          {WORDS.map(({ letter, rest, note, placement }, index) => (
            <Reveal
              key={letter}
              y={12}
              delay={Math.min(index * 0.05, 0.25)}
              className={placement}
            >
              <article className="relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-[10px] bg-paper px-5 py-5">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-l from-signal to-transparent"
                />
                <p className="text-ink">
                  <span className="text-[clamp(1.8rem,3vw,2.2rem)] font-extrabold leading-none tracking-[-0.03em]">
                    {letter}
                  </span>
                  <span className="text-[clamp(1.1rem,2vw,1.4rem)] font-light leading-none tracking-[-0.02em] text-graphite">
                    {rest}
                  </span>
                </p>
                <p className="text-xs leading-relaxed text-graphite">{note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
