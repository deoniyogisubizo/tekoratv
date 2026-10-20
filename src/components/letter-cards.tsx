import { Reveal } from "./reveal";

const WORDS = [
  {
    letter: "T",
    rest: "echnology",
    note: "AI, embedded systems, IoT, networks, and digital infrastructure — the tools and engineering we cover from the inside, by people who actually build them.",
    placement: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  },
  {
    letter: "O",
    rest: "pportunity",
    note: "Funding calls, grants, tenders, jobs, accelerators, and partnerships — the openings tech people and companies must act on before they close.",
    placement: "lg:col-start-3 lg:col-span-2 lg:row-start-1",
  },
  {
    letter: "K",
    rest: "nowledge",
    note: "Tutorials, explainers, and hands-on training that turn a curious viewer into someone who can build.",
    placement: "lg:col-start-3 lg:row-start-2",
  },
  {
    letter: "R",
    rest: "esearch",
    note: "Labs, universities, pilots, and experiments shaping what African tech does next.",
    placement: "lg:col-start-4 lg:row-start-2 lg:row-span-2",
  },
  {
    letter: "A",
    rest: "dvancement",
    note: "How a prototype becomes a product, a startup becomes a business, and a community gains a capability it did not have before.",
    placement: "lg:col-start-1 lg:col-span-3 lg:row-start-3",
  },
  {
    letter: "E",
    rest: "ntertainment",
    note: "Documentaries, creator features, and culture formats that make technology enjoyable to watch.",
    placement: "lg:col-start-1 lg:col-span-4 lg:row-start-4",
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

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
          {WORDS.map(({ letter, rest, note, placement }, index) => (
            <Reveal
              key={letter}
              y={16}
              delay={Math.min(index * 0.06, 0.3)}
              className={placement}
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
                <p className="max-w-md text-sm leading-relaxed text-graphite">
                  {note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
